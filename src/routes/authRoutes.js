import express from 'express'
import { login,logout,signUP,testController } from '../controllers/AuthControllers.js'
import { isAdmin,isLoggedIn } from '../middlewares/authMiddlewares.js'
const router = express.Router()
//Routing
//signUP ||method :Post
router.post("/signup",signUP)


//Login ||method :post
router.post("/login",login)

//Logout ||method :post
router.post("/logout",logout)

router.get("/user-auth",isLoggedIn,(req,res)=>{
    res.send(200).json({
        ok : true
    })
})

router.get("/admin-auth",isLoggedIn,isAdmin,(req,res)=>{
    res.send(200).json({
        ok : true
    })
})


//test controllers
router.get("/test", isLoggedIn,isAdmin,testController)
export default router;
