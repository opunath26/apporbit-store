import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ErrorPage = ({ error }) => {
  return (
    <>
      <Navbar />

      {/* Main Error Section */}
      <div className="flex flex-col justify-center items-center bg-gray-50 px-5 min-h-[80vh] text-center">
        
        {/* Error Image */}
        <img
          src="https://i.ibb.co.com/LdcMkp5n/error-404.png"
          alt="404 Error"
          className="mb-6 w-full max-w-xl"
        />

        {/* Error Message */}
        <h1 className="mb-2 font-bold text-gray-800 text-4xl">Oops! Page Not Found 😢</h1>
        <p className="mb-4 text-gray-600">
          {error?.statusText || error?.message || "The page you’re looking for doesn’t exist or has been moved."}
        </p>

        {/* Back Home Message (no Link) */}
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition duration-200"
        >
          Go Back Home
        </button>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
