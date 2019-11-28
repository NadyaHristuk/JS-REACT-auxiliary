function ExtractJwt (req) {
    let token = null;
    if (req.cookies && req.cookies.token !== void(0)) {
        token = req.cookies['token'];
    }
    return token;
}

module.exports = {
    // PORT: process.env.PORT || 5555,
    jwt: {
        jwtFromRequest: ExtractJwt,
        secretOrKey: 'TjkhJG634fgfg'
    },
    expiresIn: '1 day',    
    google: {
        clientID: 'lab1test-980',
        clientSecret: 'AIzaSyDUTEd-FchoYmMVbCJrHQs9OPm9DGMz-Co'
    },
    github: {
        clientID: '4cbf11707d238ed79f0e',
        clientSecret: '619e65e95fd1544a075b1b32cca22fe9f5fc8859',
        callbackURL: "http://localhost:3000/auth/github/callback"
    }
}