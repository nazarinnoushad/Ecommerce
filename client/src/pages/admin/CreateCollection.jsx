import React from 'react'
import AdminMenu from './../../components/AdminMenu';
import { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios'


const CreateCollection = () => {
const [collection,setcollection]= useState([])
const getAllCollection = async()=>{
  try{
const {data} = await axios.get("api/v1/collection/get-allcollection")
if(data.success){
  setcollection(data.collection)
  toast.success()
}
  }catch(error){
    console.log(error);
    toast.error(`something went wrong getting all collection ${error}`)
    
  }
}

  return (
    <div className='bg-black'>
<AdminMenu/>

    </div>
  )
}

export default CreateCollection