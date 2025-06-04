import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Learn about this full-stack authentication project using React, Node.js, Express, and MongoDB."
        />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1672883552028-569851f4e7d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full p-8 text-white bg-black/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
        <h1 className="text-3xl sm:text-4xl text-pink-400 text-center font-extrabold mb-4 drop-shadow-lg">
          About This Project
        </h1>

        <p className="text-lg leading-relaxed text-gray-200">
          This is a full-stack authentication system built with{' '}
          <span className="font-semibold">React</span>,{' '}
          <span className="font-semibold">Node.js</span>,{' '}
          <span className="font-semibold">Express</span>, and{' '}
          <span className="font-semibold">MongoDB</span>.
        </p>

        <p className="text-gray-300 mb-4">
          It provides core authentication features including:
        </p>

        <ul className="list-disc list-inside text-gray-200 space-y-2 mb-6">
          <li>User registration, login, and logout</li>
          <li>JWT-based authentication and session handling</li>
          <li>Secure API access with token verification</li>
          <li>Role-based route protection for admin/user control</li>
        </ul>

        <p className="text-gray-300">
          This project demonstrates how to implement secure, scalable authentication in modern web applications.
        </p>
      </div>
    </div>
  );
};

export default About;