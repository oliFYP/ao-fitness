import React from 'react';

const SearchBox = () => {
  return (
    <div className="w-full sm:w-1/2 bg-white p-5 rounded-lg mt-10 sm:ml-0">
    <div className="flex flex-col  space-y-4">
      <input
        type="text"
        placeholder="Location"
        className="px-4 py-2 bg-gray  text-gray-800  focus:outline-none"
      />
      <input
        type="text"
        placeholder="Coach Name"
        className="px-4 py-2 text-gray-800  focus:outline-none"
      />
      <button
        className="bg-black text-white px-4  py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  </div>
  );
};

export default SearchBox;