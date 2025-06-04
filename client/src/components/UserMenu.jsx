import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => (
  <div className="w-64 p-5 text-white">
    <h2 className="text-xl font-bold text-cyan-400 mb-6">USER PANEL</h2>
    <ul className="space-y-4">
      <li>
        <Link to="/dashboard/user/profile" className="block text-gray-300 hover:text-cyan-300 transition-colors">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/dashboard/user/orders" className="block text-gray-300 hover:text-cyan-300 transition-colors">
          Orders
        </Link>
      </li>
    </ul>
  </div>
);

export default UserMenu;

