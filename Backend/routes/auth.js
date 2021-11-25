import  express from "express";
import { registerUser,loginUser, logOut,getUserProfile,forgotPassword,resetPassword } from "../controllers/authController";
import {authenticateUser} from "../Middlewares/authMiddleware"

const router = express.Router()

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/me').get(authenticateUser,getUserProfile);

router.route('/logout').get(logOut);




export default router;