import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const server = express();
// routes
import AuthRouter from "./routes/user.routes.js"

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URL=process.env.mongodb
server.use(express.json())
server.use(cookieParser())
server.use("/auth",AuthRouter)


server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

mongoose.connect(MONGODB_URL).then(()=>{}).catch(err=>{});
