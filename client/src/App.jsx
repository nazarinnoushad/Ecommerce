import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/PrivateRote';
import { AdminRoute } from './components/routes/AdminRoute';
import AdminDashboard from "./pages/admin/AdminDashboard";
import Profile from './pages/user/Profile';
import { Orders } from './pages/user/Orders';
import CreateProduct from './pages/admin/CreateProduct';
import ManageUsers from './pages/admin/ManageUsers';
import CreateCollection from "./pages/admin/CreateCollection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title={"Ecommerce"} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="collection" element={<Collection />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

      
        <Route path="dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />

        </Route>

        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/createcollection" element={<CreateCollection/>}/>
          <Route path="admin/createproduct" element={<CreateProduct/>}/>
          <Route path="admin/manageusers" element={<ManageUsers/>}/>
        </Route>

      
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;


