const checkAuthenticity = require('../middleware/Auth');

const router = require('express').Router();

router.get('/', checkAuthenticity, (req, res) => {
    console.log('logged in user detail', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 12045799
        },
        {
            name: "tv",
            price: 999999
        }
    ])
});

module.exports = router;