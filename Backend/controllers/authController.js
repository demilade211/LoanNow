import UserModel from "../models/userModel"
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import sendToken from "../utils/jwtToken";


//To register user {{DOMAIN}}/api/v1/register
export const registerUser = async(req,res,next)=>{

    try {

        const {email,phoneNumber,name,password,confirmPassword} = req.body

        if(!email || !password || !confirmPassword || !phoneNumber || !name)return next(new ErrorHandler("All fields required",401))

        if(password.length < 6)return next(new ErrorHandler("Password cannot be less than 6 characters",401))

        if(password !== confirmPassword)return next(new ErrorHandler("Passwords do not match",401))

        const user = await UserModel.findOne({email:email.toLowerCase()})
    
        if(user)return next(new ErrorHandler("User already registered",401))
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
    
        const savedUser = await UserModel.create({
            name,
            email,
            phoneNumber,
            password:hashedPassword
        });
    
    
        const payload = {userid: savedUser._id}
        const authToken = await jwt.sign(payload,process.env.SECRETE,{expiresIn: '7d'})

        sendToken(savedUser, 200,res,authToken)

    } catch (error) {
        return next(error)
    }
}

//To login {{DOMAIN}}/api/v1/login
export const loginUser = async(req,res,next)=>{

    const {email,password} = req.body

    try {

        if(!email || !password)return next(new ErrorHandler("All fields required",401))

        if(password.length < 6)return next(new ErrorHandler("Password cannot be less than 6 characters",401))

        
            const user = await UserModel.findOne({email:email.toLowerCase()}).select("+password")

            if(!user) return next(new ErrorHandler("Invalid Credentials",404))

            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch){
                return next(new ErrorHandler("Invalid Credentials",400))
            }

            const payload = {
                userid: user._id
            }
            const authToken = await jwt.sign(payload,process.env.SECRETE,{expiresIn: '7d'})
            
            sendToken(user, 200,res,authToken)
            
    } catch (error) {
        return next(error)
    }
}

// Get currently logged in user details   =>   /api/v1/me
export const getUserProfile =  async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        return next(error)
    }
}


//To Logout /api/v1/logout
export const logOut = async(req,res,next)=>{

    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
    
        res.status(200).json({
            success: true,
            message: 'Logged out'
        })

    } catch (error) {
        return next(error)
    }
}




