import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import hero from '../../assets/hero.png';
import useApps from '../../Hooks/useApps';

const Home = () => {
    const apps = useLoaderData() || [];
    const data = useApps();
    console.log(data);
    const featuredApps = apps.slice(0,8) ;
    // console.log(apps);
    return (
        <div>
            <div className="mx-auto mt-10 max-w-3xl text-center">
  <h1 className="font-extrabold text-[#001931] text-5xl md:text-6xl leading-tight">
    We Build <br />
    <span className="bg-clip-text bg-gradient-to-r from-[#4a7cab] via-[#5f9dc1] to-[#84dbee] text-transparent">
      Productive
    </span> Apps
  </h1>

  <p className="mt-4 w-200 text-[#627382] text-lg md:text-xl leading-loose">
    At AppOrbit, we design and build innovative apps that make everyday life easier, smarter, and more enjoyable.  
Our mission is to transform your ideas into impactful digital experiences that truly stand out.

  </p>
</div>


            <div>
                <div className="flex justify-center pt-5">
                    <img src={hero} alt="hero-banner" className="w-3/4" />
                </div>
            </div>
            
             {/*----------Download Banner-------------  */}
            <div>
                <section className="bg-gradient-to-r from-purple-500 to-purple-400 py-16 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 font-bold text-3xl md:text-4xl">
          Trusted By Millions, Built For You
        </h2>

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
                <h4 className='text-[#001931] text-semibold text-xl md:text-4xl'>Trending Apps</h4>
                <p  className="mt-4 w-200 text-[#627382] text-lg md:text-xl leading-loose">Explore All Trending Apps on the Market developed by us</p>
            </div>


            <div className='gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {featuredApps.map(app => (
                    <AppsCard key={app.id} app={app} />
                    ))}
            </div>
            
                <div className='flex justify-center'>
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-10 text-white btn"> <Link to='/apps'>Show All</Link> </button>
                </div>
        </div>
    );
};

export default Home;
