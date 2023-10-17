import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig'; 
import { collection, query, where, getDocs } from 'firebase/firestore';

const SearchBox = () => {
  const [coachNames, setCoachNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCoachNames = async () => {
      if (searchQuery.trim() !== '') {
        const coachesCollection = collection(db, 'Coaches');
        const coachesQuery = query(coachesCollection, where('name', '>=', searchQuery));

        try {
          const querySnapshot = await getDocs(coachesQuery);
          const coaches = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return `${data.name} ${data.surname}`;
          });

          // Filter coaches based on the input searchQuery
          const filteredCoaches = coaches.filter(coach =>
            coach.toLowerCase().includes(searchQuery.toLowerCase())
          );

          setCoachNames(filteredCoaches);
        } catch (error) {
          console.error('Error fetching coaches:', error);
        }
      } else {
        setCoachNames([]);
      }
    };

    fetchCoachNames();
  }, [searchQuery]);
  return (
    <div className="flex">
    <div className="w-full p-0 pb-6 md:p-8 pt-0 bg-black rounded-lg text-center">
      <h2 className="text-white text-2xl mb-4 font-bold">Search for a Coach </h2>
      <div className="mb-4 relative">
        <label className="block text-white mb-1" htmlFor="findCoach">
          Find Coach (If known):
        </label>
        <input
          type="text"
          id="findCoach"
          className="w-full px-3 py-2 bg-gray-700 rounded text-white"
          placeholder="Enter coach name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
 
        {coachNames.length > 0 && (
          <ul className="bg-white text-black py-2 px-3 rounded-lg absolute z-10 w-full">
            {coachNames.map((coach, index) => (
              <li key={index} className="text-center">
                {coach}
              </li>
            ))}
          </ul>
        )}
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
              <div className="flex flex-wrap justify-center">
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
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg">
          Search
        </button>
          </div>
        </div>
    
  );
};

export default SearchBox;