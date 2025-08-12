import app from "./src/App.js";
import mongoose from "mongoose";
import colors from "colors"
import config from "./src/config/config.js";
import Razorpay from "razorpay";

(async (req, res) => {
    try{
        await mongoose.connect(config.MONGODB_URL);
        console.log("successfully connected to MONGODB".bgBlack.blue)
    }catch(error){
        console.log(`Error in MONGODB connection ${error}`.bgRed.white)
        res.status(500).json({
            success:false,
            message:"Error in database connection",
            error
        })
    }
})()
const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`App is running at PORT : ${PORT} successfully`.rainbow);
});


export const instance = new Razorpay({
    key_id:config.RAZORPAY_API_KEY,
    key_secret:config.RAZORPAY_API_SECRET
})