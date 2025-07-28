import { useState, useEffect } from "react";
import axios from "axios";

export default function useCollection() {
  const [collections, setCollections] = useState([]);

  // Get all collection
  const getAllCollection = async () => {
    try {
      const { data } = await axios.get( "http://localhost:4000/api/v1/collection/get-allcollection");
        setCollections(data?.collection); 
      }catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCollection();
  }, []);

return collections;
}
