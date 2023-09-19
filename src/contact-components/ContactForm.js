
import React, { useState } from 'react';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission logic here
      console.log('Form submitted:', { name, email, message });
    };
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded shadow-lg">
        <h1 className="text-3xl mb-4 text-center text-white">Welcome to Customer Support</h1>
        <p className="text-center mb-4 text-white">If you need assistance, please fill out the form below.</p>
      <div className="max-w-md mx-auto text-white">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2 bg-gray-700 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 bg-gray-700 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full px-3 py-2 bg-gray-700 rounded text-white"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-gray-600 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;