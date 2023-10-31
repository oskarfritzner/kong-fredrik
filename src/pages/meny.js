import React from 'react';
import menuItems from '../data/MenuItems'; 
import DisplayItems from '../logic/DisplayMenu';
import useScrollDetect from "../hooks/useScrollDetect";
import Navbar from '../components/navbar';

const Menu = () => {

    const hasScrolled = useScrollDetect();

    return (

        <div className='bg-black pt-24'>
            <Navbar hasScrolled={hasScrolled} />
            <h1 className='text-center text-white text-6xl mt-12'>Pizza meny</h1>
            <ul className='p-16'>
                <DisplayItems menuItems={menuItems} />
            </ul>
        </div>
    );
}

export default Menu;
