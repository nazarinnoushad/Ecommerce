import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 text-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-4">About Aliza</h1>
        <p className="text-lg text-center mb-10">
          Aliza is a modern MERN stack e-commerce platform I built to deliver a smooth and intuitive online shopping experience. 
          It integrates advanced features and a clean UI to demonstrate how a scalable e-commerce application is developed.
        </p>

        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-3xl font-bold mb-3">Why I Built Aliza</h2>
          <p className="mb-4">
            This project showcases my skills in building a real-world e-commerce solution. 
            From product management to filtering and authentication, I focused on scalability and user experience.
          </p>
          <ul className="space-y-2">
            {[
              "Secure user authentication & authorization",
              "Product and collection management",
              "Advanced filters with dynamic search",
              "Responsive UI with seamless navigation",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <CheckCircleIcon className="text-purple-600 mr-2" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-3xl font-bold mb-3">Project Goal</h2>
          <p>
            My goal with Aliza was to develop a complete e-commerce platform using the MERN stack, 
            highlighting my expertise in full-stack web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
