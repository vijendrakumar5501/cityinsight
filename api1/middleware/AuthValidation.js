
const joi=require('joi')

const signupvalidation=(req,res,next)=>{
        const schema=joi.object({
            firstName:joi.string().min(3).max(15).required(),
            middleName:joi.string().max(15).allow(''),
            lastName:joi.string().min(3).max(15).required(),
            email:joi.string().email().required(),
            password:joi.string().min(6).max(50).required(),
            confirmPassword:joi.string().min(6).max(50).required()
        });
        const {error}=schema.validate(req.body);
        if(error){
            return res.status(400)
            .json({meassage:'bad requiest',error});

        }

        next();
        
       

}
const Loginvalidation=(req,res,next)=>{
        const schema=joi.object({
           
            email:joi.string().email().required(),
            password:joi.string().min(6).max(50).required(),
            
        });
        const {error}=schema.validate(req.body);
        if(error){
            return res.status(400)
            .json({meassage:'bad requiest',error});

        }

        next();

       

}

module.exports={
    signupvalidation,
    Loginvalidation
}