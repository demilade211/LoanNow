import  express from "express";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import auth from "./routes/auth";
import errorMiddleware from "./Middlewares/errors"
import cors from "cors";


const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));//to handle url encoded data
app.use(cookieParser())


app.use('/api/v1',auth);

//Middleware to handle errors
app.use(errorMiddleware);


export default app;