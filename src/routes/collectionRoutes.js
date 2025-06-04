import express from 'express'
import { createCollection,getAllCollection } from '../controllers/collectionControllers.js'
import { isAdmin, isLoggedIn } from '../middlewares/authMiddlewares.js'

const router = express.Router()

// routes

router.post("/create-collection",isLoggedIn,isAdmin,createCollection)
router.get("/get-allcollection",getAllCollection)

export default router