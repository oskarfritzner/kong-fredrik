import React from "react";

const JulebordCTA = () => {
  return (
    <div className="text-white flex justify-center items-center bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-red-500 w-4/5 py-8 px-12 shadow-sm rounded-lg flex justify-between items-center mt-16 mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-snug">Bestill for Julebord</h2>
          <p className="text-xl mb-6 leading-relaxed">
            Reserver din plass for en uforglemmelig julefeiring med oss!
          </p>
        </div>
        <button
          className="bg-white text-red-500 h-12 py-2 px-6 rounded-lg font-semibold text-lg shadow-md 
             transition-transform transform hover:scale-105 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Bestill Nå
        </button>
      </div>
    </div>
  );
};

export default JulebordCTA;

