import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const LoanSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,//gets the  _id from user model
        ref: "User",
    },
    firstName:{
        type: String,
        required: [true, "Please enter your first name"],
        maxlength: [30, "Your name cannot exceed 30 characters"]

    },
    lastName:{
        type: String,
        required: [true, "Please enter your first name"],
        maxlength: [30, "Your name cannot exceed 30 characters"]

    },
    amount:{
        type: String,
        required: [true, "Please enter amount"],
    },
    accountNumber:{
        type: String,
        required: [true, 'Please enter your account number'],
        minlength: [10, 'Your account number must be at least 10 characters'],
    },
    bankName: {
        type: String,
        required: [true, 'Please enter your bank name'],
    },
    bvn: {
        type: String,
        required: [true, 'Please enter your bvn'],
    },
},
{timestamps: true});

export default mongoose.model("Loan", LoanSchema);