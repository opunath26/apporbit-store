import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppsCard from '../AppsCard/AppsCard';

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');

  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div>
      <div className='flex justify-between items-center py-5'>
        <h1 className='font-semibold text-3xl'>
          <span>({searchedApps.length})</span> Apps Found
        </h1>

        <label className="flex items-center gap-2 input-bordered w-64 input input-primary">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search apps..."
            className="grow"
          />
          <kbd
            className="text-gray-400 cursor-pointer kbd kbd-sm"
            onClick={() => setSearch('')}
          >
            ✕
          </kbd>
        </label>
      </div>

      <div className='gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {searchedApps.map(app => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
