import React from 'react';

const SearchBox = () => {
  return (
    <div className="flex justify-center items-center h-screen">
          <div className="w-full  p-8 bg-gray-800 rounded-lg">
            <h2 className="text-white text-2xl mb-4">Search for a Coach</h2>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="findCoach">
                Find Coach:
              </label>
              <input
                type="text"
                id="findCoach"
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                placeholder="Enter coach name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="location">
                Location:
              </label>
              <input
                type="text"
                id="location"
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                placeholder="Enter location"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2">Select Sport:</label>
              <div className="flex flex-wrap">
                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="form-radio" name="sport" value="boxing" />
                  <span className="ml-2 text-white">Boxing</span>
                </label>
                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="form-radio" name="sport" value="MMA" />
                  <span className="ml-2 text-white">MMA</span>
                </label>
                <label className="inline-flex items-center mr-4 mb-2">
                  <input type="radio" className="form-radio" name="sport" value="keepFit" />
                  <span className="ml-2 text-white">Keep-fit</span>
                </label>
                <label className="inline-flex items-center mb-2">
                  <input type="radio" className="form-radio" name="sport" value="other" />
                  <span className="ml-2 text-white">Other</span>
                </label>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
    
  );
};

export default SearchBox;