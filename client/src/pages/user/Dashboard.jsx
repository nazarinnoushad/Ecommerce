import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import UserMenu from '../../components/UserMenu';

const Dashboard = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Dashboard - ClickToCart";
  }, []);

  return (
    <div className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex gap-10">
        <UserMenu />
        <div className="py-6 space-y-6">
          <InfoRow label="Name:" value={auth.user?.name} className="text-pink-400 uppercase" />
          <InfoRow label="Email:" value={auth.user?.email} className="lowercase" />
          <InfoRow label="Contact:" value={auth.user?.phone} className="uppercase" />
          <InfoRow label="Address:" value={auth.user?.address} className="lowercase" />
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, className = '' }) => (
  <div>
    <span className="text-gray-400">{label}</span>
    <span className={`ml-6 font-semibold tracking-wide ${className}`}>{value}</span>
  </div>
);

export default Dashboard;



