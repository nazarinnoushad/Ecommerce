import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import { toast } from "sonner";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";   
import Dropdown from "./Dropdown";
import Search from "./forms/Search";
import useCollection from './../../../src/hooks/useCollection';
import CartContext from "../context/CartContext";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [collectionDropdown, setCollectionDropdown] = useState(false);
  const collections = useCollection();
  const [cart] = useContext(CartContext);

  const handleLogout = async () => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/auth/logout");
      if (data.success) {
        toast.success(data.message);
        setAuth({ user: null, token: "" });
        localStorage.removeItem("auth");
        navigate("/");
      } else toast.error(data.message);
    } catch {
      toast.error("Logout failed. Please try again.");
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const CollectionMenu = ({ isMobile }) => (
    <div
      className={
        isMobile
          ? "relative w-11/12 bg-white text-black shadow-lg rounded mt-2 z-50"
          : "absolute bg-white text-black shadow-lg rounded mt-2 w-40 z-50"
      }
    >
      <Link
        to="/collection"
        className="block px-4 py-2 hover:bg-gray-200"
        onClick={() => {
          setCollectionDropdown(false);
          if (isMobile) setMobileMenuOpen(false);
        }}
      >
        All Collection
      </Link>
      {collections.map((item) => (
        <div key={item._id}>
          <Link
            to={`/collection-product/${item.slug}`}
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={() => {
              setCollectionDropdown(false);
              if (isMobile) setMobileMenuOpen(false);
            }}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <nav className="w-full h-20 bg-gradient-to-r from-blue-500 via-pink-400 to-blue-300 shadow-md flex items-center justify-between px-4 md:px-10 z-50">

      {/* Logo */}
      <Link
        to="/"
        className="text-4xl font-black text-white hover:text-yellow-100"
        onClick={() => {
          setMobileMenuOpen(false);
          setDropdownOpen(false);
        }}
      >
        ALiza
      </Link>

      {/* Search Bar */}
      <div className="hidden md:block w-64">
        <Search />
      </div>

      {/* Mobile Cart Icon - Visible only on small screens */}
      <Link
        to="/cart"
        className="md:hidden text-white flex items-center relative mr-3"
      >
        <ShoppingCartIcon fontSize="large" />
        {cart?.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </Link>

      {/* Mobile Toggle */}
      <button
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
          setDropdownOpen(false);
        }}
        className="md:hidden text-white"
      >
        {mobileMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-yellow-100">
            Home
          </Link>
        </li>

        {auth?.user && (
          <>
            <li className="relative">
              <button
                onClick={() => setCollectionDropdown(!collectionDropdown)}
                className="hover:text-yellow-100 flex items-center gap-1"
              >
                Collection{" "}
                <ArrowDropDownIcon
                  className={collectionDropdown ? "rotate-180 transition-transform" : "transition-transform"}
                />
              </button>
              {collectionDropdown && <CollectionMenu />}
            </li>

            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-yellow-100 flex items-center"
              >
                {auth.user.role} <ArrowDropDownIcon />
              </button>
              {dropdownOpen && <Dropdown user={auth.user} onClose={() => setMobileMenuOpen(false)} />}
            </li>
          </>
        )}
      </ul>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <Link to="/cart" className="relative text-white cursor-pointer hover:text-yellow-100">
          <ShoppingCartIcon fontSize="large" />
          {cart?.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {!auth?.user ? (
          <>
            <Link to="/login" className="text-white hover:text-yellow-100">
              Login
            </Link>
            <Link to="/signup" className="bg-white text-pink-600 px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-50">
              Sign Up
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} className="text-white hover:text-yellow-100">
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-pink-500 via-blue-400 to-blue-300 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <div className="w-11/12">
            <Search />
          </div>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">
            Home
          </Link>

          {auth?.user ? (
            <>
              <button
                onClick={() => setCollectionDropdown(!collectionDropdown)}
                className="flex items-center gap-1 hover:text-yellow-100"
              >
                Collection{" "}
                <ArrowDropDownIcon
                  className={collectionDropdown ? "rotate-180 transition-transform" : "transition-transform"}
                />
              </button>
              {collectionDropdown && <CollectionMenu isMobile />}

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-yellow-100"
              >
                {auth.user.role}{" "}
                <ArrowDropDownIcon
                  className={dropdownOpen ? "rotate-180 transition-transform" : "transition-transform"}
                />
              </button>
              {dropdownOpen && <Dropdown user={auth.user} onClose={() => setMobileMenuOpen(false)} />}

              <button onClick={handleLogout} className="hover:text-yellow-100">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">
                Login
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-100">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;






