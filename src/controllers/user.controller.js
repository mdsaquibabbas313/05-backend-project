import { asyncHandler } from "../utils/asynHandler.js";

// if any error came by chance 
const registerUser = asyncHandler( async(req , res) =>{

    res.status(200).json({
        message : "ok and saquib and hitesh sir chai and code"
    })

} )

export {registerUser}

