import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const CollectionProduct = () => {
  const [collection, setCollection] = useState([]); 
  const [products, setProducts] = useState([]);
  const params = useParams();

  const getProductsByCollection = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/product-collection/${params.slug}`
      );
      setCollection(data?.collection);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong get product by collection"); 
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCollection();
  }, [params?.slug]);

  console.log(collection);
  console.log(products);

  return (
    <div>
      <h1>CollectionProduct</h1>
    </div>
  );
};

export default CollectionProduct;
