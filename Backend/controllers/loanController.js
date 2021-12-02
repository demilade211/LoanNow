import LoanModel from "../models/loanModel"
import ErrorHandler from "../utils/errorHandler.js";


//To request for loan {{DOMAIN}}/api/v1/loan
export const requestLoan = async(req,res,next)=>{

    try {
        const {user} = req;
        const {firstName,lastName,amount,accountNumber,bankName,bvn} = req.body

        if(!firstName || !lastName || !amount || !accountNumber || !bvn || !bankName)return next(new ErrorHandler("All fields required",401))
        const savedUser = await LoanModel.create({user:user._id,firstName,lastName,amount,accountNumber,bankName,bvn});

        res.status(200).json({
            success: true,
        })

    } catch (error) {
        return next(error)
    }
}

//To get loan history {{DOMAIN}}/api/v1/loan
export const getLoans = async(req,res,next)=>{
    const {user} = req;

    try {

        const loans = await LoanModel.find({user:user._id}).sort({createdAt:-1});

        res.status(200).json({
            success: true,
            loanHistory: loans
        })
            
    } catch (error) {
        return next(error)
    }
}