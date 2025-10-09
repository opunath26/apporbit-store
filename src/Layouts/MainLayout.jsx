import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 mx-auto p-4 md:px-8 lg:px-12 md:py-8 lg:py-12 w-full max-w-screen-xl pxy-4'>
                <Outlet />
            </div>
            <Footer />
            
        </div>
    );
};

export default MainLayout;