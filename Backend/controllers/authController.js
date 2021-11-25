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

//Forgot password {{DOMAIN}}/api/v1/password/forgot
export const forgotPassword = async(req,res,next)=>{

    const {email} = req.body;

    try {

        const user = await UserModel.findOne({email:email.toLowerCase()})

        if(!user) return next(new ErrorHandler("User with this email not found",404))

        // Generate token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Hash and set to resetPasswordToken
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Set token expire time
        user.resetPasswordExpire = Date.now() + 30 * 60 * 1000

        await user.save({validateBeforeSave: false});

        //create password reset url
        const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

        const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nif you have not 
        requested this email, then ignore it.`

        try {
            await sendEmail({
                email: user.email,
                subject: "SellIT Password Recovery",
                message
            })

            res.status(200).json({
                success: true,
                message: `Email sent to ${user.email}`
            })
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save({validateBeforeSave: false})
            return next(new ErrorHandler(error.message,500))

        }


    } catch (error) {
        return next(error)
    }
}

//reset password {{DOMAIN}}/api/v1/password/reset/:token
export const resetPassword = async(req,res,next)=>{
    const {token} = req.params;
    const {password,confirmPassword} = req.body;

    try {
        // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')

    const user = await UserModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if(!user) return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))

    if (password !== confirmPassword) {
        return next(new ErrorHandler('Password does not match', 400))
    }

    // Setup new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    user.password = hashedPassword;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    const payload = {userid: user._id}
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




