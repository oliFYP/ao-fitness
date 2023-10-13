import React from 'react';
import logo from '../img/logo.png';
import menu from '../img/burger.png';
import { signOut,getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const TopBarO = () => {
  const navigate = useNavigate();
  const auth = getAuth()
  async function handleSignOut(){
      try {
          await signOut(auth);
          navigate('/');
      } catch (error) {
          console.log(error)
      }
    }
 
  return (
    <div className="absolute top-0 w-full">
  <header className="bg-gradient-to-b from-black to-transparent p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 mt-1 sm:h-12 sm:mt-2" />
        <p className="font-bold text-white text-xl hidden sm:block sm:text-3xl">Fitness</p>
      </div>
      
      <div className="flex items-center space-x-7">
      <button onClick={() => {handleSignOut()}} className="font-bold h-9 text-white relative group btn btn-border-underline" >
  Log out
  <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</button>
      <img src={menu} alt="Menu" className="h-8 mr-2 mt-1 sm:h-10 sm:mt-2 " />
      
      </div>
    </div>
  </header>
</div>

  );
};

export default TopBarO;