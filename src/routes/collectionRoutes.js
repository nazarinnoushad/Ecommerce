import express from 'express'
import { createCollection,deleteCollection,getAllCollection, getSingleCollection, updateCollection } from '../controllers/collectionControllers.js'
import { isAdmin, isLoggedIn } from '../middlewares/authMiddlewares.js'

const router = express.Router()

// routes

router.post("/create-collection",isLoggedIn,createCollection)
router.get("/get-allcollection",getAllCollection)
router.put("/update-collection/:id",isLoggedIn,isAdmin,updateCollection)
router.delete("/delete-collection/:id",isLoggedIn,isAdmin,deleteCollection)
router.get("/single-collection/:slug",isLoggedIn,isAdmin,getSingleCollection)
export default router