import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Static images for each collection
const collectionImages = {
  pullovers: "https://images.unsplash.com/photo-1634901581982-6b408cf4226a?q=80&w=688&auto=format&fit=crop",
  "t-shirts": "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?q=80&w=1974&auto=format&fit=crop",
  jeans: "https://images.unsplash.com/photo-1715758890151-2c15d5d482aa?q=80&w=687&auto=format&fit=crop",
  sandals: "https://images.unsplash.com/photo-1563357732-94f6a5df8e4a?q=80&w=1170&auto=format&fit=crop",
  cosmetics:"https://images.unsplash.com/photo-1544973810-7ecf787e9608?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const Collection = () => {
  const [collections, setCollections] = useState([]);

  // get all collections
   const getAllCollection = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/collection/get-allcollection");
      if (data && data.success) {
        toast.success(data.message)
        setCollections(data.collection);
        toast.success("Collections fetched successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error(`something went wrong getting all collection ${error}`);
    }
  };

  useEffect(() => {
    getAllCollection();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Our Collections
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Curated styles & trends for every occasion
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {collections.map((item) => {
            const imageUrl =
              collectionImages[item.slug] ||
              "https://via.placeholder.com/400x400?text=Collection";

            return (
              <Link
                key={item._id}
                to={`/collection/${item.slug}`}
                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image with overlay */}
                <div className="relative h-64 w-full">
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                </div>

                {/* Name */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg group-hover:text-pink-300 transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
