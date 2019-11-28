const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const User = require('./model/userModel');

//passport config for api auth
const passport = require('passport');
const { Strategy } = require('passport-jwt');
const jwt = require('jsonwebtoken');
const GithubStrategy = require('passport-github2').Strategy;
const { jwt } = require('./config/config');
const config = require('./config/config');


passport.use(new Strategy(jwt, function(jwt_payload, done) {
    if (jwt_payload != void(0)) {
        return done(false, jwt_payload);
    }
    done();
}))

passport.use(new GithubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  }, function (accessToken, refreshToken, profile, done) {
    console.log('profile: ' + JSON.stringify(profile));
    return done(null, profile);
  }));



  function auth (socket, next) {
    // Parse cookie
    cookieParser()(socket.request, socket.request.res, () => {});

    // JWT authenticate
    passport.authenticate('jwt', {session: false}, function (error, decryptToken, jwtError) {
        if(!error && !jwtError && decryptToken) {
            next(false, {username: decryptToken.username, id: decryptToken.id});
        } else {
            next('guest');
        }
    })(socket.request, socket.request.res);

}


function createToken (body) {
  return jwt.sign(
      body,
      config.jwt.secretOrKey,
      {expiresIn: config.expiresIn}
  );
}

function checkAuth (client, next) {
  passport.authenticate('jwt', { session: false }, (err, decryptToken, jwtError) => {
      if (jwtError != void(0) || err != void(0)) {
          return 'Some error!';
      };
      client.user.decryptToken = decryptToken;
      next();
  })(client, next);
}




// локальная стратегия

passport.use('loginUsers', new LocalStrategy((username, password, done) => {
  console.log(username);
  User
    .findOne({login: username})
    .then(user => {
      console.log(user);
      if (user.validPassword(password)) {
        console.log(user);
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => {
      console.log(err);
      done(err);
    });
}));

passport.use(new GithubStrategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
}, function (accessToken, refreshToken, profile, done) {
  console.log('profile: ' + JSON.stringify(profile));
  return done(null, profile);
}));



config=require('./config/config'),

authenticate=require('./authenticate.js'),
socketauth = require('socketio-auth')(io,{
  authenticate:function(socket,data,callback){
    console.log('authenicating user ');
    var token = data.token;
    if(token!== null){
    jwt.verify(token,app.get('superSecret'),function(err,decoded){
      if(err){
        return callback(new Error('Invalid Token'));
      }else{
        socket.client.user = decoded;
        console.log('user authenticated to socket.io '+ decoded.name);
        return callback(null,true);
      }
    });
    
    }else{
      return callback(new Error('Token not found'));
    }
  },
  timeout:10000	
});


//check token middleware


var token = req.headers['token'] || req.body.token || req.query.token;

  if(token){
    jwt.verify(token,app.get('superSecret'),function(err,decoded){
      if(err){
        res.json({error:true,message:"Invalid Token"});
      }else{
        req.decoded = decoded;
        next();
      }
    });
    
  }else{
    res.json({error:true,message:"Token not found!"});
  }

app.post('/auth',function(req,res){
var email = req.body.email;
var password =req.body.password;

authenticate(email,password,function(data){
  var user = data;
  var token = jwt.sign(user,app.get('superSecret'),{
    expiresIn:86440
  });
  res.json({error:false,token:token});
});
});

io.on('connection',function(socket){
socket.on('chat message',function(msg){
  console.log('new message :'+msg);
  io.emit('chat message',socket.client.user.name +" :"+ msg);
});
});


