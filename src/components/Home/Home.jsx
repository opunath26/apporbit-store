import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';
import hero from '../../assets/hero.png';

const Home = () => {
    const apps = useLoaderData();
    const featuredApps = apps.slice(0,8)
    console.log(apps);
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
    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
    Our goal is to turn your ideas into digital experiences that truly make an impact.
  </p>
</div>


            <div>
                <div className="flex justify-center p-5">
                    <img src={hero} alt="hero-banner" className="w-3/4" />
                </div>
            </div>
            <div className='gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {featuredApps.map(app => (
                    <AppsCard key={app.id} app={app} />
                    ))}
            </div>
        </div>
    );
};

export default Home;