import React from 'react';
import { Link, NavLink } from 'react-router';
import '../../assets/logo.png';

const Navbar = () => {
    return (

        <div className="bg-base-100 shadow-sm navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content">
        <li>
             <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/apps'>Apps</NavLink>
        </li>
        <li>
            <NavLink to='/installation'>Installation</NavLink>
        </li>
      </ul>
    </div>
    <Link to='/' className="flex items-center font-bold text-2xl">
  <img 
    src="/src/assets/logo.png" 
    alt="AppOrbit Logo" 
    className="mr-2 w-8 h-8"
  />
  <span className="bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent">
    AppOrbit
  </span>
</Link>



  </div>
  <div className="hidden lg:flex navbar-center">
    <ul className="px-1 menu menu-horizontal">
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/apps'>Apps</NavLink>
      </li>
      <li>
        <NavLink to='/installation'>Installation</NavLink>
      </li>
    </ul>
  </div>
  

  <div className="navbar-end">
  <a 
    href="https://github.com/opunath26" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 text-white transition btn"
  >
    {/* GitHub Icon inside button */}
    <svg 
      aria-label="GitHub logo" 
      width="20" 
      height="20" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
    </svg>
    Contribute
  </a>
</div>

</div>

    );
};

export default Navbar;