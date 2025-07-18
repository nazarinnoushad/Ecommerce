import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import crypto from "crypto"
import authRoutes from './routes/authRoutes.js'
import collectionRoutes from './routes/collectionRoutes.js'
import productRoutes from "./routes/productRoutes.js"
const app = express()

// middle wares
 app.use(cors())  // it allows to interact with client which is located in different domain
app.use(express.json())  // instructing the app to accept data in the json format
app.use(cookieParser()) // it allows to access the users cookie
app.use(morgan("dev")) // logs request errors and more to the console

//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/collection",collectionRoutes)
app.use("/api/v1/product",productRoutes)

/*const key = crypto.randomBytes(64).toString('hex')
console.log(key);*/


app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})
export default app