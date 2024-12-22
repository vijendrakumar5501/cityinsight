
const jwt = require('jsonwebtoken');


const checkAuthenticity = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is require' });
    }
    try {
        const decodedData = jwt.verify(auth, process.env.jwt_secr);
        req.user = decodedData;

        next();
        
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token wrong or expired' });
    }
}

module.exports = checkAuthenticity;