import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function LoginContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const auth = getAuth();
    

  useEffect(() => {
  
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

  
    return () => clearTimeout(delayTimeout);
  }, []);

  const navigateToRegister = () => {
    navigate('/Client-Register');
  };
  const navigateToForgotten = () => {
    navigate('/forgotten-password');
  };

  async function handleSignIn(e) {
    e.preventDefault();
  
    try {
      const firestore = getFirestore();
      const usersRef = collection(firestore, 'Users');
      const querySnapshot = await getDocs(query(usersRef, where('email', '==', email)));
  
      if (!querySnapshot.empty) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed in:', user);
        navigate('/Dashboard');
      } else {
        window.alert('User not found. Please check your email.');
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        window.alert('User not found. Please check your email.');
      } else if (error.code === 'auth/wrong-password') {
        window.alert('Incorrect password. Please try again.');
      } else {
        window.alert('Incorrect password. Please try again.');
        console.error('Error signing in:', error);
      }
    }
  }
  return (
    <div className={`flex justify-center min-h-screen sm:items-center w-full h-auto bg-black bg-opacity-50 ${isLoaded ? 'opacity-100 transition-all duration-1000 ease-out' : 'opacity-0'}`}>
    <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 m-4 mt-10 mb-10 mb-auto sm:m-0 rounded-lg max-w-md w-full">
        <h2 className="select-none text-white text-2xl mb-4 font-bold">Customer Login</h2>
        <div className="mb-4">
          <label className="select-none block text-white mb-1" htmlFor="email">
            Email:
          </label>
          <input
          onChange={(e) => {setEmail(e.target.value)}}
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="select-none block text-white mb-1" htmlFor="password">
            Password:
          </label>
          <input
          onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            id="password"
            className="w-full px-3 py-2 bg-gray-800 bg-opacity-50 rounded text-white"
            placeholder="Enter your password"
          />
        </div>
        <button onClick={(e) => {handleSignIn(e)}} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full">
          Login
        </button>
        <div className="mt-4 text-center">
          <button className="text-white underline" onClick={navigateToRegister}>Create an Account</button>
        </div>
        <div className="mt-1 text-center">
          <button className="text-white underline" onClick={navigateToForgotten}>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;