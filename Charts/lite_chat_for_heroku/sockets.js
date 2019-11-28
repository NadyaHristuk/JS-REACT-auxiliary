const Message = require('./model/messageModel');

const socketioJwt = require('socketio-jwt');
const { jwt } = require('./config/config');

// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');

// const User = require('./model/userModel');

// //passport config for api auth
const passport = require('passport');
const { Strategy } = require('passport-jwt');
// const jwt = require('jsonwebtoken');
const GithubStrategy = require('passport-github2').Strategy;
// const { jwt } = require('./config/config');
const config = require('./config/config');



let message = {};
let online = 0;
let usersOnline = [];


module.exports = io => {
    io.on('connection', socketioJwt.authorize({
		secret: jwt.secretOrKey,
		timeout: 15000 // 15 seconds to send the authentication message
	}), (client) => {

        client.on('new-user', (user) => {
            console.log("User connected");
            console.log(++online); 
            client.join(client.handshake.query.user);
            client.broadcast.emit("change-online", online)
            // console.log(user);
            let allMes = Message.find().sort({ addAt: 1}).lean();
            
            allMes.exec(function(err,docs){   // sort('-time').limit(30)
                if (err) throw err;
                console.log('Send message from DB');
                let obj ={
                        docs: docs,
                        online: online,
                        usersOnline: usersOnline,
                        clientId: client.id,
                    }
                // client.to('general').emit('all-messages', obj);
                client.emit('all-messages', obj);
                console.log(obj);
            })  
        })

        client.on('register', async (user) => {
            client.username = user.username;
            try {
                let userDB = await User.findOne({email: user.email}).lean().exec();
                if (userDB != void(0)) {
                    message = {message: "User already exist"};
                }
                else {
                    userDB = await User.create({
                        username: user.username,
                        password: user.password,
                        email: user.email,
                    });
        
                    const token = createToken({id: userDB._id, username: userDB.username});
        
                    client.cookie('token', token, {
                        httpOnly: true
                    });
        
                    message = {message: "User created.", currentUser: userDB};
                }
                client.emit('register-on-DB', message);
            } catch (e) {
                console.error("E, register,", e);
                message = {message: "some error"};
                client.emit('register-on-DB', message);
            }
        });

        client.on('login', async (user) => {
            try {
                let userDb = await User.findOne({email: user.email}).lean().exec();
                if (userDb != void(0) && bcrypt.compareSync(user.password, userDb.password)) {
                    const token = createToken({id: userDb._id, username: userDb.username});

                    res.cookie('token', token, {
                        httpOnly: true
                    });

                    message = {message: "User login success!", currentUser: userDb};
                    client.emit('login-done', message);
                } else {
                    if (userDb == void(0)) {
                        message = {message: "User not exist, enter correct email."};
                    } else if (!bcrypt.compareSync(user.password, userDb.password)) {
                        message = {message: "Password not correct."};
                    } else {
                        message = {message: "User not exist or password not correct."};
                    }
                    client.emit('login-done', message);
                }
            } catch (e) {
                console.error("E, login,", e);
                res.status(500).send({message: "some error"});
                message = {message: "Some error in login."};
                    client.emit('login-done', message);
            }
        });

        client.on("disconnect", () => {
            console.log("its work")
            console.log(client.id)
            let a = usersOnline.filter(el => el.userId !== client.id)
            usersOnline = a
            // console.log(usersOnline)
            console.log(online > 0 ? --online : null);
            console.log(`Now in chat ${online} users.`); 
            client.broadcast.emit("change-online", online);
            io.emit('get-user-name', usersOnline)
        });

        client.on("message", (message) => {
            // console.log(message);
            Message.create(message, err => {
                if(err) return console.error(err);
                client.broadcast.emit("new-message", message);
            }); 
        });
        client.on("typing", (data) => {
            console.log(data)
            client.broadcast.emit("somebody-typing", data);
        })
        client.on('deleteMessage', (id) => {
            Message.findOneAndRemove({messageId: id}, err => {
                if (err) throw err
                console.log('Message succsessfully delete!')
                client.broadcast.emit("message-was-deleted", id);
            })
        })
        client.on("editMessage", (id, editMess) => {
            Message.findOneAndUpdate({messageId: id}, editMess, err => {
                if (err) throw err
                console.log('Message succsessfully edit!')
                client.broadcast.emit("message-was-edited", editMess);
            })
        })
    });
};







passport.use(new Strategy(jwt, function(jwt_payload, done) {
    if (jwt_payload != void(0)) {
        return done(false, jwt_payload);
    }
    done();
}))

// passport.use(new GithubStrategy({
//     clientID: config.github.clientID,
//     clientSecret: config.github.clientSecret,
//     callbackURL: config.github.callbackURL
//   }, function (accessToken, refreshToken, profile, done) {
//     console.log('profile: ' + JSON.stringify(profile));
//     return done(null, profile);
//   }));



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

// passport.use('loginUsers', new LocalStrategy((username, password, done) => {
//   console.log(username);
//   User
//     .findOne({login: username})
//     .then(user => {
//       console.log(user);
//       if (user.validPassword(password)) {
//         console.log(user);
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       done(err);
//     });
// }));

// passport.use(new GithubStrategy({
//   clientID: config.github.clientID,
//   clientSecret: config.github.clientSecret,
//   callbackURL: config.github.callbackURL
// }, function (accessToken, refreshToken, profile, done) {
//   console.log('profile: ' + JSON.stringify(profile));
//   return done(null, profile);
// }));



// config=require('./config/config'),

// authenticate=require('./authenticate.js'),
// socketauth = require('socketio-auth')(io,{
//   authenticate:function(socket,data,callback){
//     console.log('authenicating user ');
//     var token = data.token;
//     if(token!== null){
//     jwt.verify(token,app.get('superSecret'),function(err,decoded){
//       if(err){
//         return callback(new Error('Invalid Token'));
//       }else{
//         socket.client.user = decoded;
//         console.log('user authenticated to socket.io '+ decoded.name);
//         return callback(null,true);
//       }
//     });
    
//     }else{
//       return callback(new Error('Token not found'));
//     }
//   },
//   timeout:10000	
// });


// //check token middleware


// var token = req.headers['token'] || req.body.token || req.query.token;

//   if(token){
//     jwt.verify(token,app.get('superSecret'),function(err,decoded){
//       if(err){
//         res.json({error:true,message:"Invalid Token"});
//       }else{
//         req.decoded = decoded;
//         next();
//       }
//     });
    
//   }else{
//     res.json({error:true,message:"Token not found!"});
//   }

// app.post('/auth',function(req,res){
// var email = req.body.email;
// var password =req.body.password;

// authenticate(email,password,function(data){
//   var user = data;
//   var token = jwt.sign(user,app.get('superSecret'),{
//     expiresIn:86440
//   });
//   res.json({error:false,token:token});
// });
// });

// io.on('connection',function(socket){
// socket.on('chat message',function(msg){
//   console.log('new message :'+msg);
//   io.emit('chat message',socket.client.user.name +" :"+ msg);
// });
// });


