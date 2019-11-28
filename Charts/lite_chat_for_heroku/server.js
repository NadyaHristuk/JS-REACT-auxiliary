const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {
    path: '/chat/',
    origins: "*:*"
});
const PORT = process.env.PORT||3004;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { jwt } = require('./config/config');



// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());
app.options('*', cors());

// Passport Authentication
app.use(passport.initialize());

//------------------------------------//
//  DB Config & Connection            //
//------------------------------------//
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://admin:myfirstdbadmin1@ds137530.mlab.com:37530/myfirstdb');
mongoose.set('debug', true);
const Message = require('./model/messageModel');

// require('./router/router')(app);
require('./sockets')(io);

//------------------------------------//
//  Initalize                         //
//------------------------------------//
// app.use(express.static('../../frontend/build'));
app.use(express.static('./frontend/build'));
server.listen(PORT, () => (console.log(`server is running on ${PORT}`)));


