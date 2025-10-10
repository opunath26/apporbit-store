import React, { useEffect, useState } from "react";

const AppDetails = () => {

    
  const [app, setApp] = useState(null);

  useEffect(() => {
    const storedApp = localStorage.getItem("selectedApp");
    if (storedApp) {
      setApp(JSON.parse(storedApp));
    }
  }, []);

  if (!app) return <p>No app selected.</p>;
  
  const { title, downloads, image, ratingAvg, companyName , size} = app;

  return (
     <div className="space-y-6 bg-white shadow-md mx-auto p-6 rounded-md max-w-4xl">

  {/* Top Section */}
  <div className="flex md:flex-row flex-col items-start space-x-0 md:space-x-6">
    
    {/* App Image */}
    <img 
      src= {image} 
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

      <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold text-white">
        Install Now {size}
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
      This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles...
      <br /><br />
      A unique feature of this app is the integration of task lists with timers...
      <br /><br />
      For people who struggle with procrastination, the app provides motivational streaks and achievements...
    </p>
  </div>

</div>

  );
};

export default AppDetails;
