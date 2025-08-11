import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import CartContext from "../context/CartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/product/single-product/${slug}`
        );
        if (data.success) {
          setProduct(data.product);
        } else {
          toast.error("Failed to load product details");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching product details");
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    let updatedCart;
    if (existingProductIndex > -1) {
      updatedCart = [...cart];
      const existingProduct = updatedCart[existingProductIndex];
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        quantityInCart: (existingProduct.quantityInCart || 1) + 1,
      };
    } else {
      updatedCart = [...cart, { ...product, quantityInCart: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item added to cart");
  };

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    // Inside return

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="flex flex-col md:flex-row gap-10 md:gap-16">
    {/* Product Image */}
    <div className="flex justify-center items-center bg-gray-50 rounded-lg p-6 shadow-md md:w-1/2">
      <img
        src={`http://localhost:4000/api/v1/product/product-photo/${product._id}`}
        alt={product.name}
        className="max-h-[400px] w-full object-contain"
      />
    </div>

    {/* Product Details */}
    <div className="md:w-1/2 flex flex-col justify-center">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{product.name}</h1>
      <p className="mt-4 text-gray-700 text-sm sm:text-base">{product.description}</p>

      <p className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900">
        ₹{product.price}
      </p>

      <div className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
        <p>
          <span className="font-semibold">Collection:</span> {product.collection?.name || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {product.quantity}
        </p>
        <p>
          <span className="font-semibold">Shipping:</span> {product.shipping ? "Available" : "Not Available"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold">
          Buy Now
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full sm:flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;
