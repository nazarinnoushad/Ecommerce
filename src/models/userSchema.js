import mongoose from "mongoose";
import bcrypt from "bcrypt"
import AuthRoles from './../utils/authRoles.js';
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,"name is Required"],
        trim:true,
        maxlength:[25,"name should not exceed 25 chars"],

    },
    email :{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    password :{
        type:String,
        required:true,
        minlength:[8,"password should contain atleast 8 char"],
        select:false,
    },
    phone :{
        type:String,
        required:true,
    },
    address :{
        type:String,    /*multiple lines of address we need string changed to empty object {}*/
        required:[true,"address is required"],
        trim:true,
        maxlength:[120,"address should not exceed 120 chars"],

    },
    role:{
        type:String,
        enum:Object.values.AuthRoles,
        default:AuthRoles.USER
    }
},{
    timestamps:true 
})
userSchema.pre("save",async function (next) {
    if(!this.isModified("password"))return next()
        this.password = await bcrypt.hash(this.password,10)
})

//  schema methods

userSchema.methods = {
    comparePassword:async function (enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    }
}


export default mongoose.model("User",userSchema)  