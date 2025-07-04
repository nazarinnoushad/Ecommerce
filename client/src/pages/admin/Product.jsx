import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { toast } from 'sonner';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/product/get-allproducts");
      if (data.success) {
        setProducts(data.products);
        toast.success("Products fetched successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong get all products ${error}`);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-1/5 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-6 bg-black">
        <AdminMenu />
      </aside>

      <main className="w-full md:w-4/5 p-6 md:p-10">
        <h1 className="text-xl text-cyan-400 font-semibold mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-gray-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-cyan-500/30 transition-shadow duration-300"
            >
              <img
                src={`http://localhost:4000/api/v1/product/product-photo/${item._id}`}
                alt="product photo"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-cyan-300">{item.name}</h2>
              <p className="text-sm text-gray-300 mb-2">{item.description}</p>
              <p className="text-sm text-gray-400">Price: ₹{item.price}</p>
              <p className="text-sm text-gray-400 mb-4">Quantity: {item.quantity}</p>

              <Link to={`/dashboard/admin/update-product/${item.slug}`}>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium px-4 py-2 rounded">
                  Update Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
