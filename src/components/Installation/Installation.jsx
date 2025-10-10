import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    
    const storedApps = localStorage.getItem("installedApps");
    if (storedApps) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, []);

  // Uninstall button click handler
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    const removedApp = installedApps.find(app => app.id === id);
  if (removedApp) {
    alert(`${removedApp.title} has been uninstalled!`);
  }
  };

  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="mx-auto px-5 max-w-6xl">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="font-bold text-gray-900 text-3xl">
            Your Installed Apps
          </h1>
          <p className="mt-2 text-gray-500">
            Explore All Installed Apps You Have Downloaded
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-gray-800 text-lg">
            {installedApps.length} App{installedApps.length !== 1 ? "s" : ""} Found
          </h2>

          <div className="relative">
            <button className="flex items-center gap-2 bg-white hover:bg-gray-100 px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
              Sort By Size
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {installedApps.length === 0 ? (
            <p className="text-gray-500 text-center">No apps installed yet.</p>
          ) : (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="flex justify-between items-center bg-white shadow-sm hover:shadow-md p-4 border border-gray-100 rounded-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="bg-gray-200 rounded-md w-14 h-14 object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{app.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-gray-500 text-sm">
                      <span className="flex items-center gap-1 text-green-600">
                        {app.downloads}
                      </span>
                      <span className="flex items-center gap-1 text-orange-500">
                        {app.ratingAvg}⭐
                      </span>
                      <span>{app.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-emerald-500 hover:bg-emerald-600 px-3 py-1 rounded-md text-white text-sm"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
