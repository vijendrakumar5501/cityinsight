const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String,required:false},
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });



const UserModel=mongoose.model("users",userSchema);

module.exports=UserModel