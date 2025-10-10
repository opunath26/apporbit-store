import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import hero from '../../assets/hero.png';
import useApps from '../../Hooks/useApps';

const Home = () => {
  // const loaderData = useLoaderData() || [];
  const { apps, loading: appsLoading } = useApps(); 
  const featuredApps = apps?.slice(0, 8) || [];

  //  Loading spinner state
  const [scaleUp, setScaleUp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setScaleUp(true), 100);
    const timer2 = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  
  if (loading || appsLoading)
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

  return (
    <div>
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <h1 className="font-extrabold text-[#001931] text-5xl md:text-6xl leading-tight">
          We Build <br />
          <span className="bg-clip-text bg-gradient-to-r from-[#4a7cab] via-[#5f9dc1] to-[#84dbee] text-transparent">
            Productive
          </span>{' '}
          Apps
        </h1>

        <p className="mt-4 w-200 text-[#627382] text-lg md:text-xl leading-loose">
          At AppOrbit, we design and build innovative apps that make everyday life easier, smarter, and more enjoyable.
          Our mission is to transform your ideas into impactful digital experiences that truly stand out.
        </p>
      </div>

      {/* ================APP==================== */}
     <div className="flex justify-center items-center gap-4 bg-gray-50 py-10">
      {/* Google Play Button */}
      <a
        href="https://play.google.com/store/apps?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white hover:shadow-md px-4 py-2 border border-gray-300 rounded-lg transition"
      >
        <img
          src="https://i.ibb.co.com/mCZn58ps/playstore.png" 
          alt="Google Play"
          className="w-6 h-6 object-contain"
        />
        <span className="font-medium text-gray-700">Google Play</span>
      </a>

      {/* App Store Button */}
      <a
        href="https://www.apple.com/app-store/" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white hover:shadow-md px-4 py-2 border border-gray-300 rounded-lg transition"
      >
        <img
          src="https://i.ibb.co.com/Xf693rTL/appstore.png" 
          alt="App Store"
          className="w-6 h-6 object-contain"
        />
        <span className="font-medium text-gray-700">App Store</span>
      </a>
    </div>



{/* -------------------BiG ImG-------------------- */}
      <div>
        <div className="flex justify-center pt-5">
          <img src={hero} alt="hero-banner" className="w-3/4" />
        </div>
      </div>

      {/*----------Download Banner-------------  */}
      <div>
        <section className="bg-gradient-to-r from-purple-500 to-purple-400 py-16 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-12 font-bold text-3xl md:text-4xl">Trusted By Millions, Built For You</h2>

            <div className="gap-10 grid grid-cols-1 md:grid-cols-3">
              {/* Total Downloads */}
              <div>
                <p className="mb-2 text-sm md:text-base">Total Downloads</p>
                <p className="mb-2 font-extrabold text-4xl md:text-5xl">26.8M</p>
                <p className="text-xs md:text-sm">26% More Than Last Month</p>
              </div>

              {/* Total Reviews */}
              <div>
                <p className="mb-2 text-sm md:text-base">Total Reviews</p>
                <p className="mb-2 font-extrabold text-4xl md:text-5xl">926K</p>
                <p className="text-xs md:text-sm">46% More Than Last Month</p>
              </div>

              {/* Active Apps */}
              <div>
                <p className="mb-2 text-sm md:text-base">Active Apps</p>
                <p className="mb-2 font-extrabold text-4xl md:text-5xl">126+</p>
                <p className="text-xs md:text-sm">26 More Will Launch</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="m-10 mx-auto max-w-3xl text-center">
        <h4 className="text-[#001931] text-semibold text-xl md:text-4xl">Trending Apps</h4>
        <p className="mt-4 w-200 text-[#627382] text-lg md:text-xl leading-loose">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {featuredApps.length > 0 ? (
          featuredApps.map((app) => <AppsCard key={app.id} app={app} />)
        ) : (
          <p className="col-span-full text-gray-500 text-center">No apps available.</p>
        )}
      </div>

      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-10 text-white btn">
          <Link to="/apps">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
