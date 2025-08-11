import User from "../models/userSchema.js"
import JWT from 'jsonwebtoken';
import config from "../config/config.js"

export const cookieOptions = {
expires : new Date(Date.now()+30*24*60*60*1000),
httpOnly: true
}
/*
    * signUP
    * route : http://localhost:4000/api/v1/auth/signup
    * discription : User signup controller to create new user
    */
export const signUP = async(req,res)=>{
    
   try{

   // get info from the front-end

   const {name,email,password,phone,address} = req.body

   // validate info

   if(!name || !email || !password || !phone || !address)
    res.status(400).json({
    success : false,
    message : `mandatory`
   })

   // check if the user already exist in database

   const existingUser = await User.findOne({email})

   // check if the user already exist in database send a response

   if(existingUser){
    res.status(200).json({
        success : false,
        message : "user already signed up please login"
    })
   }

   // check if the user doesn't exist create a new user

const user = await User.create({
    name,
    email,
    password,
    phone,
    address
})
user.password = undefined // for password safety

   // send a success message to the user

   res.status(201).json({
    success : true,
    message : "user successfully signed up ",
    user
   })

   }catch(error){
    console.log(error);
    res.status(500).json({
        success : false,
        message : `Error in signing up ${error}`,
        error
    })
   }
}


/*
*LogIn  
*route:http://localhost:4000/api/v1/auth/login
*discription:user login controller to login 
*/
export  const login=async (req,res)=>{
    try{
        //get information from the frontend

           const {email,password}=req.body

        //validation

        if(!email || !password){
        return res.status(400).json({
        success:false,
        message:"invalid email  or password"
    })
}
        //check if the user exist in database

            const user= await User.findOne({email}).select("+password")

        //if the user doesn't exist send the response

             if(!user){
                res.status(404).json({
                    success:false,
                    message:"no user found please signUp"
                })
             }

        //if existing user compare password

        const isPasswordMatched = await user.comparePassword(password)

            
        //if password doen't match send response

        if(!isPasswordMatched){
            res.status(400).json({
                success : false,
                message : "invalid password"
            })
        }


        //if password match generate JWT Token

        const token = JWT.sign(
            {
              id: user._id,
              role: user.role
            },
            config.JWT_SECRET,
            { expiresIn: config.JWT_EXPIRY }
          );
          

        //flushout password

        user.password = undefined

        //stup cookie

        res.cookie("token",token,cookieOptions)

        //send success message to the front end

        res.status(200).json({
            success : true,
            message : " successfully logged in ",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
              },
              
            token
           })
        
    }catch(error){

        res.status(500).json({
            success:false,
            message:'error in login ${error}',
            error
        })
    }
}

//Logout

export const logout = async (req, res) => {
    try {
        res.cookie("token",null,{
            expires: new Date(Date.now()),
            httponly: true,
        })
        res.status(200).json({
            success: true,
            message: "successfully Logged out"
        })
    } catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error in logging out ${error}`,
            error,
        })
         
    }
}

//test controllers
export const testController = (req,res) =>{
    res.send("protect route")
}

// Update Profile

export const updateProfile = async (req, res) => {
  try {
    const { name, password, address, phone } = req.body;
    const user = await User.findById(req.user?.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (name) user.name = name;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if (password?.length >= 8) user.password = password;

    const { password: _, ...updatedUser } = (await user.save()).toObject();

    res.json({ success: true, message: "Profile updated", updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update failed", error: error.message });
  }
};
