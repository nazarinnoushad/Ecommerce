import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import ProductForm from '../../components/forms/ProductForm';
import { toast } from 'sonner';
import axios from 'axios';
import { Select } from 'antd';


const {Option}= Select
const CreateProduct = () => {
const [collection,setcollection]= useState([])
const [name,setName]=useState("")
const [description,setDescription]=useState("")
const [price,setPrice]=useState("")
const [quantity,setQuantity]=("")
const [shipping,setSipping]=(false)

  const getAllCollection = async()=>{
try{
const {data} = await axios.get("http://localhost:4000/api/v1/collection/get-allcollection")
if(data.success){
  setcollection(data.collection)
  toast.success("Collections fetched successfully!")
}
  }catch(error){
    console.log(error);
    toast.error(`something went wrong getting all collection ${error}`)
    
  }
}
useEffect(()=>{
getAllCollection()
},[])
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-1/5 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-6 bg-black">
        <AdminMenu />
      </aside>

      <main className="w-full md:w-4/5 p-6 md:p-10">
        <h1 className="text-xl text-cyan-400 font-semibold mb-6">Cereate Product</h1>
        <ProductForm />
      </main>
    </div>
  );
};

export default CreateProduct;
