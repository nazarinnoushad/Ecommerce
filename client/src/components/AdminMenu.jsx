import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <div className="w-64 p-5 text-white">
      <h2 className="text-lg font-bold text-cyan-400 mb-4">ADMIN PANEL</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/dashboard/admin/createcollection" className="text-gray-300 hover:text-white">
            Create Collection
          </Link>
        </li>
        <li>
          <Link to="/dashboard/admin/createproduct" className="text-gray-300 hover:text-white">
            Create Product
          </Link>
        </li>
        <li>
          <Link to="/dashboard/admin/manageusers" className="text-gray-300 hover:text-white">
            Manage Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;

