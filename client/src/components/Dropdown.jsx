import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Dropdown = ({ onClose }) => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
      <Link
        to={`/dashboard/${auth.user.role === "ADMIN" ? "admin" : "user"}`}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        onClick={onClose} 
      >
        Dashboard
      </Link>
    </div>
  );
};

export default Dropdown;






