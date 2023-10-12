import React, { useState, useEffect } from 'react';


function RegisterContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [hasNonNumericCharacters, setHasNonNumericCharacters] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const handleEmailChange = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPassword(event.target.value);
    setIsPasswordValid(passwordPattern.test(event.target.value));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handlePhoneChange = (event) => {
    setHasNonNumericCharacters(event.target.value.match(/[^0-9]/) !== null); 
  };


  const maxDOB = new Date();
  maxDOB.setFullYear(maxDOB.getFullYear() - 18);
  const maxDOBFormatted = maxDOB.toISOString().split('T')[0];
 
  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center bg-black bg-opacity-50 ${isLoaded ? 'opacity-100 transition-all duration-1000 ease-out' : 'opacity-0'}`}>
      <div className="max-w-sm w-full h-auto mt-10 mb-10 m-1 p-6 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg grid grid-cols-2 gap-4">
    
        <div className="col-span-2 mb-4">
        <h2 className="select-none text-2xl font-bold text-white">Client Register</h2>
      </div>
      <div>
        <label htmlFor="name" className="select-none block mb-2 text-white font-bold">
          Name
        </label>
        <input type="text" id="name" className="w-full rounded border p-2 mb-4 bg-gray-800 text-white" />

        <label htmlFor="surname" className="select-none block mb-2 text-white font-bold">
          Surname
        </label>
        <input type="text" id="surname" className="w-full rounded border p-2 mb-4 bg-gray-800 text-white" />

        <label htmlFor="email" className={`select-none block mb-2 font-bold ${isEmailValid ? 'text-white' : 'text-red-500'}`}>
          Email
        </label>
        <input type="email"
            id="email"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 ${isEmailValid ? 'text-white' : 'text-red-500'}`}
            onChange={handleEmailChange}/>

        <label htmlFor="password" className={`select-none block mb-2 font-bold ${isPasswordValid ? 'text-white' : 'text-red-500'}`}>
            Password
          </label>
        <input
            type="password"
            id="password"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 font-bold ${isPasswordValid ? 'text-white' : 'text-red-500'}`}
            onChange={handlePasswordChange}
          />
          <label htmlFor="confirmPassword" className={`select-none block mb-2 font-bold ${passwordsMatch ? 'text-white' : 'text-red-500'}`}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 ${passwordsMatch ? 'text-white' : 'text-red-500'}`}
            onChange={handleConfirmPasswordChange}
          />
      </div>
      <div>
        <label htmlFor="dob" className="select-none block mb-2 text-white font-bold">
          Date of Birth
        </label>
        <input type="date" id="dob" className="w-full rounded border p-2 mb-4 bg-gray-800 text-white" max={maxDOBFormatted} />

        <label htmlFor="phone" className={`select-none block mb-2 font-bold ${hasNonNumericCharacters ? 'text-red-500' : 'text-white'}`}> 
      Phone
    </label>
    <input
      type="tel"
      id="phone"
      className={`w-full rounded border p-2 mb-4 bg-gray-800 ${hasNonNumericCharacters ? 'text-red-500' : 'text-white'}`} 
      onChange={handlePhoneChange}
    />

        <label htmlFor="country" className="select-none block mb-2 text-white font-bold">
          Country
        </label>
        <input type="text" id="country" className="w-full rounded border p-2 mb-4 bg-gray-800 text-white" />

        <label htmlFor="city" className="select-none block mb-2 text-white font-bold">
          City
        </label>
        <input type="text" id="city" className="w-full rounded border p-2 mb-4 bg-gray-800 text-white" />
      </div>
      <button type="submit" className="select-none col-span-2 bg-black text-white py-2 px-4 rounded">
        Register
      </button>
    </div>
  </section>
  );
}

export default RegisterContainer;