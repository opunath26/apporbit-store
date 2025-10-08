import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <h2>my Navbar</h2>
            <Footer />
            <Outlet />
        </div>
    );
};

export default MainLayout;