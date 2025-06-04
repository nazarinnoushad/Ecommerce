import slugify from "slugify";
import Collection from "../models/collectionSchema.js";


export const createCollection = async (req, res) => {
    try {
// get info from the front-end

       const {name} = req.body

// validate info

       if (!name) {
        return  res.status(400).json({
            success: false,
            message: "Please provide collection name"
        });
       }
//check if the collection is existing in database

const existingCollection = await Collection.findOne({name})

// if collection already existing database send response

   if(existingCollection){
    res.status(200).json({
        success : false,
        message : "Collection Already Exist"
    })
   }
// if collection doesnot existing create collection

const collection = await Collection.create({name,slug:slugify(name)})


   // send a success message to the user

   res.status(200).json({
    success : true,
    message : "New collection has been created successfully ",
    collection
   })


     
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error in creating collection: ${error}`,
            error
        });
    }
};
