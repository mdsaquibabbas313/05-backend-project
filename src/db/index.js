import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    // try catch : we can face problems with dbms

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB conected !! DB HOST : ${connectionInstance.connection.host}`);
        // console.log(connectionInstance)
    } catch (error) {
        console.log('MongoDB connection error' , error)
        process.exit(1)
    }
}


export default connectDB