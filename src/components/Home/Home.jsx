import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from '../AppsCard/AppsCard';

const Home = () => {
    const apps = useLoaderData();
    console.log(apps);
    return (
        <div>
            <div className='gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {apps.map(app => (
                    <AppsCard key={app.id} app={app} />
                    ))}
            </div>
        </div>
    );
};

export default Home;