import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    
         const error = useRouteError();

  return (


    <>
        <Navbar />
        <div>{error.message}</div>;
        <Footer />
    </>
  ) 

    
  
  
};

export default ErrorPage;


// import { useParams } from "react-router";
// import useApps from "../../Hooks/useApps";

// const AppDetails = () => {

//     const { id } = useParams();
//     const { apps, loading, error } = useApps();
    
//     const app = apps.find(a => String(a.id) === id);
// // console.log("apps data:", apps);
//     if(loading)  return <p>Loading.......</p>
//     const { title, downloads, image, ratingAvg, companyName , size, description} = app;