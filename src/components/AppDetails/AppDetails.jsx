import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const AppDetails = () => {

  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    if (location.state?.app) {
      setApp(location.state.app);
    } else {
      const storedApp = localStorage.getItem("selectedApp");
      if (storedApp) {
        setApp(JSON.parse(storedApp));
      }
    }
  }, [location.state]);


  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
      const alreadyInstalled = installedApps.some(a => a.id === app.id);
      if (alreadyInstalled) {
        setIsInstalled(true);
      }
    }
  }, [app]);

  if (!app) return <p>No app selected.</p>;
  
  const { title, downloads, image, ratingAvg, companyName , size, description} = app;

  // Install button click handler
  const handleInstallation = () => {
    const installedApps = localStorage.getItem("installedApps");
    let appsArray = [];
    
    if (installedApps) {
      appsArray = JSON.parse(installedApps);
    }

    // Duplicate check
    const alreadyInstalled = appsArray.some(a => a.id === app.id);
    if (alreadyInstalled) {
      alert(`${title} is already installed.`);
      setIsInstalled(true); 
      return;
    }

    appsArray.push(app);
    localStorage.setItem("installedApps", JSON.stringify(appsArray));

    setIsInstalled(true);
    alert(`${title} has been installed!`);
  }

  return (
     <div className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-md max-w-4xl">

      {/* Top Section */}
      <div className="flex md:flex-row flex-col items-start space-x-0 md:space-x-6">
        
        {/* App Image */}
        <img 
          src={image} 
          alt="App" 
          className="mb-4 md:mb-0 rounded-md w-32 h-32 object-cover"
        />

        {/* App Details */}
        <div className="flex-1">
          <h1 className="mb-1 font-bold text-2xl">
            {title}
          </h1>
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
              <span className="font-semibold">reviews</span>
            </div>
          </div>

          {/* Install Now Button (toggle logic added) */}
          <button 
            onClick={handleInstallation} 
            disabled={isInstalled} 
            className={`px-4 py-2 rounded font-semibold text-white transition 
              ${isInstalled 
                ? "bg-green-900 hover:bg-green-600 " 
                : "bg-green-500 hover:bg-green-600"}`}
          >
            {isInstalled ? "Installed" : `Install Now ${size}`}
          </button>
        </div>
      </div>

      {/* Ratings Graph */}
      <div>
        <h2 className="mb-2 font-semibold text-lg">Ratings</h2>
        <div className="space-y-1">
          {[
            { star: 5, width: "100%" },
            { star: 4, width: "70%" },
            { star: 3, width: "30%" },
            { star: 2, width: "15%" },
            { star: 1, width: "5%" },
          ].map(({ star, width }) => (
            <div key={star} className="flex items-center">
              <span className="w-12 text-sm">{star} star</span>
              <div className="flex-1 bg-orange-400 rounded h-4" style={{ width }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="mb-2 font-semibold text-lg">Description</h2>
        <p className="space-y-2 text-gray-700 text-sm">
            {description}
        </p>
      </div>

    </div>
  );
};

export default AppDetails;
