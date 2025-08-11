import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import UserMenu from "../../components/UserMenu";
import { toast } from "sonner";
import axios from "axios";

const Profile = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [updated, setUpdated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("http://localhost:4000/api/v1/auth/profile", {
        name,
        password,
        phone,
        address,
      });

      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));

        toast.success("Profile updated successfully");

     
        setName("");
        setPassword("");
        setPhone("");
        setAddress("");
        setUpdated(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const { name, phone, address } = auth.user;
    setName(name);
    setPhone(phone);
    setAddress(address);
  }, [auth?.user]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-1/5 border-b md:border-b-0 md:border-r border-gray-800 p-4 md:p-6 bg-black">
        <UserMenu />
      </aside>

      <main className="w-full md:w-4/5 p-6 md:p-10">
        <h1 className="text-xl text-cyan-400 font-semibold mb-6">Update Profile</h1>

        {!updated ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded border text-white bg-transparent"
            />

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter New Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded border text-white bg-transparent"
            />

            <input
              type="text"
              name="phone"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded border text-white bg-transparent"
            />

            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 rounded border text-white bg-transparent"
            />

            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-4 rounded w-fit"
            >
              Update Profile
            </button>
          </form>
        ) : (
          <p className="text-green-400">Profile updated successfully.</p>
        )}
      </main>
    </div>
  );
};

export default Profile;
