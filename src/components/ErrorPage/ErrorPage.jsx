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