const UserModel = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        const { firstName, middleName = "", lastName, email, password, confirmPassword } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409)
                .json({ message: 'user alredy hai', success: false })
        }

        if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
            return res.status(404)
                .json({ message: 'password mismatch', success: false })
        }

        const userModel = new UserModel({ firstName, middleName, lastName, email, password });

        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201)
            .json({
                message: 'signup successfully',
                success: true
            })


    } catch (error) {
        res.status(500)
            .json({ message: 'internal servr errr', success: false })
    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        const ermessage = 'Auth failed email or password is wrong'

        if (!user) {
            return res.status(403)
                .json({ message: ermessage, success: false })
        };


        const ispequal = await bcrypt.compare(password, user.password);
        if (!ispequal) {
             return  res.status(403)
                .json({ message: ermessage, success: false });
        }

            const jwtToken = jwt.sign(
                {
                    email: user.email,
                    _id: user._id
                },
                process.env.jwt_secr,
                { expiresIn: '24h' }
            );

            res.status(200)
                .json({
                    message: "Login Success",
                    success: true,
                    jwtToken,
                    email,
                    name: user.firstName
                });
        }



     catch (err) {
        res.status(500)
            .json({
                message: "Internal  errror",
                success: false
            })
    }
}





module.exports = {
    signup,
    login
}