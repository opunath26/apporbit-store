import React from 'react';
import useApps from '../../Hooks/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
    const { apps } = useApps()
    return (
        <div>
            <div className='flex justify-between items-center py-5'>
                <h1 className='font-semibold text-3xl'>Apps Found</h1>
                <button className='btn-outline btn'>Search</button>
            </div>
            <div className='gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {apps.map(app => (
                    <AppsCard key={app.id} app={app} />
                    ))}
            </div>
        </div>
    );
};

export default Apps;