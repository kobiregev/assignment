const jwt = require('jsonwebtoken');
const secret = 'bla564a0sd';

const verifyUser = (req, res, next) => {
    //has token
    if (req.header("Authorization")) {
        //checking if token is valid
        jwt.verify(req.header("Authorization"), secret, (err, user) => {
            if (err) {
                res.status(403).json({ error: true, msg: "Token not valid." })
            } else {
                req.user = user
                next()
            }
        })
    } else {
        res.status(401).json({ error: true, msg: "Token expected" })
    }
}
module.exports = verifyUser