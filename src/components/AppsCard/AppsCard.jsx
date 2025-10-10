import React from 'react';
import { useNavigate } from 'react-router';

const AppsCard = ({ app }) => {
    const navigate = useNavigate(); // useNavigate hook
    const { title, downloads, image, ratingAvg, id } = app;

   const handleClick = () => {
    navigate(`/app/${id}`, { state: { app } });
};


    return (
        <div 
            className="bg-white shadow-md hover:shadow-lg rounded-lg max-w-xs overflow-hidden transition hover:-translate-y-2 duration-300 transform"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <img src={image} alt="App Image" className="p-4 w-80 h-80 object-cover" />
            <div className="p-4">
                <h2 className="mb-2 font-semibold text-gray-900 text-lg">{title}</h2>
                <div className="flex justify-between items-center">
                    <div className="flex items-center bg-green-100 p-2 rounded font-medium text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"  
                            strokeLinejoin="round"  
                            strokeWidth={2}           
                        >
                            <path d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8L8 16m4-4l4 4M12 4v4m0 0L8 8m4 0l4 0" />
                        </svg>
                        {downloads}
                    </div>

                    <div className="flex items-center bg-orange-100 p-2 rounded font-medium text-orange-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1 w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.068 9.382c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.955z" />
                        </svg>
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;
