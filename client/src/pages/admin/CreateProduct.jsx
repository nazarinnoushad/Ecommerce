import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { toast } from 'sonner';
import axios from 'axios';
import { Select } from 'antd';

const { Option } = Select;

const CreateProduct = () => {
  const [collection, setCollection] = useState("");
  const [collections,setCollections] = useState([])
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState(false);
  const [photo,setPhoto] = useState("")

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


  // handle create


  const handleCreate = async(e)=>{
       e.preventDefault()
    try{
 const productData = new FormData()    
 productData.append("name",name) 
 productData.append("collection",collection) 
 productData.append("description",description) 
 productData.append("price",price) 
 productData.append("quantity",quantity) 
 productData.append("shipping",shipping) 
 productData.append("photo",photo) 

 const {data} = await axios.post("http://localhost:4000/api/v1/product/create-product",productData)
if (data.success) {
  toast.success(data.message)
  
}else{
 toast.error(data.message) 
}
    }catch(error){
      console.log(error);
      toast.error(`Something went wrong creating product ${error}`)
      
    }
  }

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
            {collections &&
            collections.map((item) => (
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

          
          {photo && (
            <div>
              <img
                src={URL.createObjectURL(photo)}
                alt="img_product"
                className="mt-2 w-40 h-40 object-cover rounded border"
              />
            </div>
          )}

          {/* Product Inputs */}
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e)=> setName(e.target.value)}
            className="p-2 rounded border text-white bg-transparent"
          />

          <textarea
            cols={56}
            rows={3}
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e)=>setDescription(e.target.value)}
            className="p-2 rounded border text-white bg-transparent"
          />

          <input
            type="number"
            value={price}
            placeholder="Price"
            onChange={(e)=>setPrice(e.target.value)}
            className="p-2 rounded border text-white bg-transparent"
          />

          <input
            type="number"
            value={quantity}
            placeholder="Quantity"
            onChange={(e)=>setQuantity(e.target.value)}
            className="p-2 rounded border text-white bg-transparent"
          />

          {/* Shipping Option */}
          <Select  
          bordered
            placeholder="Select Shipping"
            className="text-white"
            size="large"
            showSearch
            onChange={(value)=>{setShipping(value)}}
          >
            <Option value="0">No</Option>
            <Option value="1">Yes</Option>
          </Select>

          <button
            type="submit"
            onClick={handleCreate}
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

