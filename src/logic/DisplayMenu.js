import React from 'react';

const DisplayItems = ({ menuItems }) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {menuItems.map(item => (
                <li key={item.id} className="menu-item bg-white p-4 shadow-lg rounded-lg">
                    <div className="relative h-64 w-full mb-4">
                        <img src={item.imgUrl} alt={item.name} className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"/>
                    </div>
                    <div className="content">
                        <h1 className="title text-xl font-semibold my-6">{item.name}</h1>
                        <span className="subtitle text-gray-500">Price: {item.price}kr</span>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default DisplayItems;
