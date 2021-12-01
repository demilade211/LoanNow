import  express from "express";
import {  requestLoan, getLoans} from "../controllers/loanController";
import {authenticateUser} from "../Middlewares/authMiddleware"

const router = express.Router()


router.route('/loan').post(authenticateUser,requestLoan)
                    .get(authenticateUser,getLoans)





export default router;