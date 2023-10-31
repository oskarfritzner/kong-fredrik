import { Link } from 'react-router-dom';

const DisplaySection = ({ imageUrl }) => {
    return (
      <div className="bg-gradient-to-r from-gray-900 to-black text-white h-screen lg:max-h-[900px] flex justify-between items-center text-center">
        <div className="flex-1 p-8 bg-black">
          <h1 className="text-6xl font-bold mb-4">Kong Fredrik</h1>
          <p className="text-lg">Velkommen til Fredrikstad koseligste bakgård</p>
          <div className="flex mt-6 justify-center">
            <Link to={'/meny'}>
            <button className="bg-red-500 text-white py-2 px-6 mr-8 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
              Bestill
            </button>
            </Link>
          </div>

        </div>
        {/*
        <div className="flex-1 flex justify-center items-center h-full relative">
          <img
            src={imageUrl}
            alt="Kong Fredrik Image"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        </div>
    */}
      </div>
    );
};

export default DisplaySection;
