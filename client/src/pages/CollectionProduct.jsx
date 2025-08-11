import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "sonner";

const CollectionProduct = () => {
  const [collection, setCollection] = useState(null);
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
      console.error(error);
      toast.error("Something went wrong while fetching products.");
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCollection();
  }, [params?.slug]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Collection Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
        {collection?.name || "Collection"}
      </h1>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <Link
              to={`/product/${item.slug}`}
              key={item._id}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
             <div className="relative p-6 bg-gray-50 flex justify-center items-center rounded-t-lg">
          <img
          src={`http://localhost:4000/api/v1/product/product-photo/${item._id}`}
         alt={item.name}
         className="max-h-64 w-auto object-contain"
      />
  <span className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs rounded-full px-2 py-1">
    ₹{item.price}
  </span>
</div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {item.name}
                </h2>
                <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                  {item.description || "No description available."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg mt-20">
          No products found in this collection.
        </p>
      )}
    </div>
  );
};

export default CollectionProduct;
