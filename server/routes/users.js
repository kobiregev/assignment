const router = require('express').Router();
const secret = 'bla564a0sd';
const jwt = require('jsonwebtoken');
const User = require('../models/users')
const verifyUser = require('../verify')

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        try {
            const user = await User.findOne({ username })
            //user exsists and password match 
            if (user && user.password === password) {
                //to add addresses
                const token = jwt.sign({ id: user._id, username: user.username }, secret, { expiresIn: "20m" })
                console.log(username + ' Signed In ' + new Date())
                res.status(200).json({ error: "false", token })
            } else {
                res.status(400).json({ error: true, msg: 'Wrong username or password.' })
            }
        } catch (error) {
            res.sendStatus(500)
        }
    } else {
        res.status(400).json({ error: true, msg: 'Missing some info.' })
    }
})
router.post('/logout', (req, res) => {
    const { username } = req.body;
    res.sendStatus(200);
    console.log(username + ' signed out in ', new Date());
})
router.post('/validateToken', verifyUser, (req, res) => {
    if (req.user) {
        res.sendStatus(200)
    }
})
module.exports = router