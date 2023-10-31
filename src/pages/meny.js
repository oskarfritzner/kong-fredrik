import React from 'react';
import displayItems from '../data/menuItems';

const Menu = () => {
    return (
        <div>
            <h2>Our Pizza Menu</h2>
            <ul>
                <displayItems />
            </ul>
        </div>
    );
}

export default Menu;
