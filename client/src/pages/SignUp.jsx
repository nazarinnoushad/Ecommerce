import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate =useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:4000/api/v1/auth/signup", {name, email, password, phone, address})
      if(data.success){
        toast.success(data.message)
        navigate("/login")
      }else{
        toast.error(data.message)
      }

    }catch(error){
      console.log(error)
      toast.error("Something went wrong in signing up")
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <Helmet>
        <title>Signup</title>
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      <div className="relative z-10 max-w-md w-full p-6 bg-black/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-pink-400">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            name={phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            required
          />
          <input
            type="text"
            placeholder="Address"
            name={address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-all duration-300 text-sm sm:text-base"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
