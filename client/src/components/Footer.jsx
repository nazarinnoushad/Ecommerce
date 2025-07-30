import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-3xl font-extrabold mb-3">Aliza</h2>
          <p className="text-sm opacity-80">
            Aliza is a full-stack MERN e-commerce application built to demonstrate a complete 
            online shopping platform. It includes features like authentication, product management, 
            collections, advanced filters, and a modern responsive UI/UX for a seamless user experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-yellow-200">Home</Link></li>
            <li><Link to="/collection" className="hover:text-yellow-200">Collections</Link></li>
            <li><Link to="/about" className="hover:text-yellow-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-yellow-200">FAQs</Link></li>
            <li><Link to="/" className="hover:text-yellow-200">Return Policy</Link></li>
            <li><Link to="/" className="hover:text-yellow-200">Shipping Info</Link></li>
            <li><Link to="/" className="hover:text-yellow-200">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-white text-purple-600 p-2 rounded-full hover:bg-yellow-200"><FacebookIcon fontSize="small" /></a>
            <a href="#" className="bg-white text-purple-600 p-2 rounded-full hover:bg-yellow-200"><InstagramIcon fontSize="small" /></a>
            <a href="#" className="bg-white text-purple-600 p-2 rounded-full hover:bg-yellow-200"><TwitterIcon fontSize="small" /></a>
            <a href="#" className="bg-white text-purple-600 p-2 rounded-full hover:bg-yellow-200"><LinkedInIcon fontSize="small" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Aliza | MERN E-commerce Project by Nazarin Noushad.
      </div>
    </footer>
  );
};

export default Footer;
