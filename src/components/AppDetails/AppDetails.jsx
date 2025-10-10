import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AppDetails = () => {
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const location = useLocation();
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScaleUp(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.state?.app) {
      setApp(location.state.app);
    } else {
      const storedApp = localStorage.getItem("selectedApp");
      if (storedApp) setApp(JSON.parse(storedApp));
    }
  }, [location.state]);

  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      const alreadyInstalled = installedApps.some(a => a.id === app.id);
      if (alreadyInstalled) setIsInstalled(true);
    }
  }, [app]);

  
  if (!app)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <img
          src="https://i.ibb.co.com/FbMMbMCM/logo.png"
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

  const { title, downloads, image, ratingAvg, companyName, size, description, ratings } = app;

  const handleInstallation = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const alreadyInstalled = installedApps.some(a => a.id === app.id);
    if (alreadyInstalled) {
      alert(`${title} is already installed.`);
      setIsInstalled(true);
      return;
    }
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setIsInstalled(true);
    alert(`${title} has been installed!`);
  };

  return (
    <div className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-md max-w-4xl">

      {/* Top Section */}
      <div className="flex md:flex-row flex-col items-start space-x-0 md:space-x-6">
        <img src={image} alt="App" className="mb-4 md:mb-0 rounded-md w-32 h-32 object-cover" />
        <div className="flex-1">
          <h1 className="mb-1 font-bold text-2xl">{title}</h1>
          <p className="mb-4 text-gray-500 text-sm">
            Developed by <span className="text-blue-600">{companyName}</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">⬇️</span>
              <span className="font-semibold">{downloads}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">{ratingAvg}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-500">📄</span>
              <span className="font-semibold">{ratings.reduce((acc, r) => acc + r.count, 0)} reviews</span>
            </div>
          </div>

          <button
            onClick={handleInstallation}
            disabled={isInstalled}
            className={`px-4 py-2 rounded font-semibold text-white transition 
              ${isInstalled ? "bg-green-900 hover:bg-green-600" : "bg-green-500 hover:bg-green-600"}`}
          >
            {isInstalled ? "Installed" : `Install Now ${size}`}
          </button>
        </div>
      </div>

      {/* Ratings Graph */}
      <div>
        <h2 className="mb-2 font-semibold text-lg">Ratings</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={ratings.slice().reverse()} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
            <Bar dataKey="count" fill="#F97316" radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div>
        <h2 className="mb-2 font-semibold text-lg">Description</h2>
        <p className="space-y-2 text-gray-700 text-sm">{description}</p>
      </div>

    </div>
  );
};

export default AppDetails;
