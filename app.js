import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cookieParser from "cookie-parser";
import router from "./routes/pageRoute.js";
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"
import { chechUser } from "./middlewares/authMiddleware.js";

dotenv.config();

//connection to the db
conn();

const app = express()

const PORT = process.env.PORT || 3000
//ejs template  engine

app.set('view engine', 'ejs');

//static files middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//routes

app.use('*', chechUser)
app.use("/", pageRoute);
app.use('/photos', photoRoute);
app.use('/users',userRoute)



app.listen(PORT, () => {
    console.log(`Application running on port : ${PORT}`)
})