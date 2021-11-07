import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name:{
        type: String,
        required: [true, "Please enter your name"],
        maxlength: [30, "Your name cannot exceed 30 characters"]

    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please enter your phone number'],
        minlength: [11, 'Your phone number must be at least 11 characters'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            default: "App/user_mklcpl.png"
        },
        url: {
            type: String,
            default: 'https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png'
        }
    },
    role: {
        type: String,
        default: 'user',
        enum:['user','admin']
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
},
{timestamps: true});

// Encrypting password before saving user
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next()
//     }

//     this.password = await bcrypt.hash(this.password, 10)
// })

export default mongoose.model("User", UserSchema);