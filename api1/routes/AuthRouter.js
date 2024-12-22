const { signupvalidation, Loginvalidation } = require('../middleware/AuthValidation');
const {signup, login} =require('../controller/AuthController')

const router=require('express').Router();


router.post('/signup',signupvalidation,signup)
router.post('/login',Loginvalidation,login)
// router.post('/product',Loginvalidation)


module.exports=router;

