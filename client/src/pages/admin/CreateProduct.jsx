import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { toast } from 'sonner';
import axios from 'axios';
import { Select } from 'antd';

const { Option } = Select;

const CreateProduct = () => {
  const [collection, setCollection] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setSipping] = useState(false);
  const [photo,setPhoto] = useState("")

  const getAllCollection = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/collection/get-allcollection");
      if (data.success) {
        setCollection(data.collection);
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
     <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-1/5 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-6 bg-black">
        <AdminMenu />
      </aside>

      <main className="w-full md:w-4/5 p-6 md:p-10">
        <h1 className="text-xl text-cyan-400 font-semibold mb-6">Create Product</h1>

        <form className="flex flex-col gap-4 w-full max-w-lg">
          {/* Collection Dropdown */}
          <Select
            bordered
            placeholder="Select a collection"
            size="large"
            showSearch
            onChange={(value) => setCollection(value)}
            className="text-white"
          >
            {collection.map((item) => (
              <Option key={item._id} value={item._id}>
                {item.name}
              </Option>
            ))}
          </Select>

          {/* Upload Image */}
          <div>
            <label className="bg-blue-800 text-white px-4 py-2 rounded w-fit cursor-pointer">
              {photo ? photo.name : "Upload Image"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>

          {/* Image Preview */}
          {photo && (
            <div>
              <img
                src={URL.createObjectURL(photo)}
                alt="product_preview"
                className="mt-2 w-40 h-40 object-cover rounded border"
              />
            </div>
          )}

          {/* Product Inputs */}
          <input
            type="text"
            placeholder="Enter name"
            className="p-2 rounded border text-white bg-transparent"
          />

          <textarea
            placeholder="Description"
            className="p-2 rounded border text-white bg-transparent"
          />

          <input
            type="number"
            placeholder="Price"
            className="p-2 rounded border text-white bg-transparent"
          />

          <input
            type="number"
            placeholder="Quantity"
            className="p-2 rounded border text-white bg-transparent"
          />

          {/* Shipping Option */}
          <Select  
            placeholder="Select Shipping"
            className="text-white"
            size="large"
          >
            <Option value="0">No</Option>
            <Option value="1">Yes</Option>
          </Select>

          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-4 rounded w-fit"
          >
            Create Product
          </button>
        </form>
      </main>
    </div>

        
    
  );
};

export default CreateProduct;

