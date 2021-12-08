import  express from "express";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import auth from "./routes/auth";
import loan from "./routes/loan";
import errorMiddleware from "./Middlewares/errors"
import cors from "cors";
import path from "path"


const app = express();


app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));//to handle url encoded data
app.use(cookieParser())


app.use('/api/v1',auth);
app.use('/api/v1',loan);

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
    })
}

//Middleware to handle errors
app.use(errorMiddleware);


export default app;