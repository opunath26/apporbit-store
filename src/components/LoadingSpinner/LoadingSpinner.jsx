import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"; // image import ✅

const LoadingSpinner = () => {
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScaleUp(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img
        src={logo} // imported image use ✅
        alt="Logo"
        className={`
          w-16 h-16
          ${scaleUp ? "scale-150" : "scale-75"}
          transition-transform duration-2000 ease-in-out
          animate-spin
        `}
      />
      <p
        className={`
          mt-4 text-xl font-semibold
          ${scaleUp ? "scale-125" : "scale-75"}
          transition-transform duration-2000 ease-in-out
        `}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
