import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import { Country } from 'country-state-city';


function RegisterContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [hasNonNumericCharacters, setHasNonNumericCharacters] = useState(false);
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();

  const countryData = Country.getAllCountries();

  const [selectedCountry, setSelectedCountry] = useState(countryData[0].name);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const handleEmailChange = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(event.target.value);
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

  const handlePhoneChange = (value) => {
    setPhone(value);
    setHasNonNumericCharacters(value.match(/[^0-9]/) !== null);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  const maxDOB = new Date();
  maxDOB.setFullYear(maxDOB.getFullYear() - 18);
  const maxDOBFormatted = maxDOB.toISOString().split('T')[0];

  
  async function handleSignUp() {
    const inputs = [
      { id: 'name', label: 'Name' },
      { id: 'surname', label: 'Surname' },
      { id: 'gender', label: 'Gender' },
      { id: 'email', label: 'Email' },
      { id: 'dob', label: 'Date of Birth' },
      { id: 'phone', label: 'Phone' },
      { id: 'country', label: 'Country' },
      { id: 'city', label: 'City' },
    ];
  
    const formData = {};
    for (const input of inputs) {
      const value = document.getElementById(input.id).value.trim();
      if (value === '') {
        alert(`Please provide a valid ${input.label}`);
        return;
      }
      formData[input.id] = value; 
    }
  
    const { email } = formData;
  
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
  
      delete formData.password;
      delete formData.confirmPassword;
  
      await addDoc(collection(db, 'Coaches'), {
        ...formData,
      });
  
      console.log('User registered successfully:', user);
      navigate('/Dashboard');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use. Please use a different email.');
      } else {
        console.error('Error registering user:', error);
      }
    }
  }

  return (

    <section className="relative min-h-screen w-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-2xl w-full mt-10 mb-10 m-1 p-6 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg">
        <h1 className="text-2xl text-center text-black font-bold mb-4">Register</h1> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
        <label htmlFor="name" className="select-none block mb-2 text-black font-bold">
          Name
        </label>
        <input type="text" id="name" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="surname" className="select-none block mb-2 text-black font-bold">
          Surname
        </label>
        <input type="text" id="surname" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />

        <label htmlFor="email" className={`select-none block mb-2 font-bold ${isEmailValid ? 'text-black' : 'text-red-500'}`}>
          Email
        </label>
        <input type="email"
            id="email"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 ${isEmailValid ? 'text-white' : 'text-red-500'}`}
            onChange={handleEmailChange}/>


<label htmlFor="password" className={`select-none block mb-2 font-bold ${isPasswordValid ? 'text-black' : 'text-red-500'}`}>
            Password
          </label>
        <input
            type="password"
            id="password"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 ${isPasswordValid ? 'text-white' : 'text-red-500'}`}
            onChange={handlePasswordChange}
          />
          <label htmlFor="confirmPassword" className={`select-none block mb-2 font-bold ${passwordsMatch ? 'text-black' : 'text-red-500'}`}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50  ${passwordsMatch ? 'text-white' : 'text-red-500'}`}
            onChange={handleConfirmPasswordChange}
          />
      </div>
      <div>
     
      <label htmlFor="gender" className="select-none block mb-2 text-black font-bold">
          Gender
        </label>
        <select
          id="gender"
          className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white"
          onChange={handleGenderChange}
          value={gender}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="dob" className="select-none block mb-2 text-black font-bold" >
          Date of Birth
        </label>
        <input type="date" id="dob" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" max={maxDOBFormatted} />

        <label htmlFor="phone" className={`select-none block mb-2 font-bold ${hasNonNumericCharacters ? 'text-red-500' : 'text-black'}`}>
  Phone
</label>
    
<div className="flex">
            <PhoneInput
              inputProps={{
                name: 'phone',
                id: 'phone',
                required: true,
                autoFocus: false,
                style: {
                  width: '100%',
                  borderRadius: '0.25rem',
                 
                  backgroundColor: 'rgba(51, 51, 51, 0.5)',
                  color: 'white', 
                },
              }}
              country={'gb'}
              value={phone}
       
             
              onChange={handlePhoneChange}
            />
          </div>


        <label htmlFor="country" className="select-none block mb-2 mt-6 text-black font-bold">
          Country
        </label>
        <select
        id="country"
        className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
>
  {countryData.map((country, index) => (
    <option key={index} value={country.name}>
      {country.name}
    </option>
  ))}
</select>

        <label htmlFor="city" className="select-none block mb-2 text-black font-bold">
          City
        </label>
        <input type="text" id="city" className="w-full rounded border p-2 mb-4 bg-gray-800 bg-opacity-50 text-white" />
      </div>
      </div>
      <div className="align-center">
      <div className="flex justify-center"> 
      <button
        onClick={() => { handleSignUp() }}
        type="submit"
        className="bg-black text-white font-bold py-2 px-10 rounded"
      >
        Register
      </button>
    </div>
    </div>
    </div>
  </section>
  );
}


export default RegisterContainer;