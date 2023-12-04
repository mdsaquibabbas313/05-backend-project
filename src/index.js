// require('dotenv').config({path : './env'})
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// for this update in dev script also 
dotenv.config({
    path : './env'
})

// App2 : by creating seperate folder

connectDB()















/* Approach 1 : Db Connection
import express from "express"

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error" , (error) => {
            console.log("error" , error);
            throw error;
        })

        app.listen(process.env.PORT , ()=> {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})();*/
