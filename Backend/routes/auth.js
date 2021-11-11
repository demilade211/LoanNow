import  express from "express";
import { registerUser,loginUser, logOut, } from "../controllers/authController";

const router = express.Router()

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

router.route('/logout').get(logOut);




export default router;