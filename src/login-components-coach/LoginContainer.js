import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Logo from '../img/Logo-black.png';

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
    navigate('/Coach-Register');
  };
  async function handleSignIn(e) {
    e.preventDefault();
  
    try {
      const firestore = getFirestore();
      const usersRef = collection(firestore, 'Coaches');
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
    <div className="w-full md:w-1/2 bg-white text-black p-8 md:p-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
  <div style={{ textAlign: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={Logo}
        className="h-12 mt-1 sm:h-15 sm:mt-2"
      />
      <h2 className="select-none text-black text-center text-2xl mb-4 font-bold">Coach Login</h2>
    </div>
    <div className="mb-4">
      <label className="select-none text-left block text-black mb-1" htmlFor="email">
        Email:
      </label>
      <input
        onChange={(e) => { setEmail(e.target.value) }}
        type="email"
        id="email"
        className="w-80 px-3 py-2 bg-white border-b  text-black"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-6">
      <label className="select-none text-left block text-black mb-1" htmlFor="password">
        Password:
      </label>
      <input
        onChange={(e) => { setPassword(e.target.value) }}
        type="password"
        id="password"
        className="w-80 px-3 py-2 bg-white border-b text-black"
        placeholder="Enter your password"
      />
    </div>
    <button className="bg-black hover-bg-gray-700 text-white font-bold py-2 px-4 rounded-3xl w-60" onClick={(e) => { handleSignIn(e) }}>
      Login
    </button>
    <div className="mt-4 text-center">
      <button className="text-black underline" onClick={navigateToRegister}>Create an Account</button>
    </div>
    <div className="mt-1 text-center">
      <button className="text-black underline">Forgot Password?</button>
    </div>
  </div>
</div>

  );
};

export default LoginContainer;