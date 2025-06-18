import express from 'express'
import formidable from "express-formidable"
import { createProduct, deleteProduct, getAllProducts, productPhoto, singleProduct, updateProduct } from '../controllers/productControllers.js'
import { isAdmin, isLoggedIn } from './../middlewares/authMiddlewares.js';

const router = express.Router()

router.post("/create-product",isLoggedIn,isAdmin, formidable(), createProduct)
router.get("/get-allproducts",getAllProducts)
router.get("/single-product/:slug",singleProduct)
router.get("/product-photo/:pid",productPhoto)
router.delete("/delete-product/:pid",isLoggedIn,isAdmin,deleteProduct)
router.put("/update-product/:pid",isLoggedIn,isAdmin,formidable(), updateProduct)
export default router
