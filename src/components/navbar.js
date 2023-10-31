// Navbar.js
import React from 'react';
import useScrollDetect from '../hooks/useScrollDetect';
import { Link } from 'react-router-dom';

const Navbar = ( ) => {
    const hasScrolled = useScrollDetect();

    return (
        <nav className={`${hasScrolled ? 'fixed top-0 left-0 w-full z-50 bg-black p-4 opacity-100' : 'absolute top-0 left-0 w-full z-50 bg-black p-4 opacity-0 pointer-events-none'} transition-opacity duration-500`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-2xl">Kong Fredrik</div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                    <li><Link to="/meny" className="text-white hover:text-gray-300">Meny</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
