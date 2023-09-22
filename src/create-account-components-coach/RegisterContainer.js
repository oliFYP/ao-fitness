import React from 'react';

function RegisterContainer() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="max-w-md w-full mr-2 ml-2 p-6 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg grid grid-cols-2 gap-4">
      <div className="col-span-2 mb-4">
        <h2 className="text-2xl font-bold text-black">Coach Register</h2>
      </div>
      <div>
        <label htmlFor="name" className="block mb-2 text-black">
          Name
        </label>
        <input type="text" id="name" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="surname" className="block mb-2 text-black">
          Surname
        </label>
        <input type="text" id="surname" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="email" className="block mb-2 text-black">
          Email
        </label>
        <input type="email" id="email" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="password" className="block mb-2 text-black">
          Password
        </label>
        <input type="password" id="password" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />
      </div>
      <div>
        <label htmlFor="dob" className="block mb-2 text-black">
          Date of Birth
        </label>
        <input type="date" id="dob" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="phone" className="block mb-2 text-black">
          Phone
        </label>
        <input type="tel" id="phone" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="country" className="block mb-2 text-black">
          Country
        </label>
        <input type="text" id="country" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="city" className="block mb-2 text-black">
          City
        </label>
        <input type="text" id="city" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />
      </div>
      <button type="submit" className="col-span-2 bg-black text-white py-2 px-4 rounded">
        Register
      </button>
    </div>
  </div>
  );
}

export default RegisterContainer;