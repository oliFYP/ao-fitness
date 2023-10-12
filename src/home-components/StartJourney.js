import React from 'react';
import SearchBox from './SearchBox';

const StartJourney = () => {
  return (
    <section className="bg-black p-8 pb-0">
    <div className="flex flex-col lg:flex-row  justify-between">
      <div className="lg:w-2/3 text-white text-left lg:pr-4 mb-8 lg:mb-0">
        <h1 className="select-none text-5xl font-bold mb-4">Your Fitness Journey Starts Here</h1>
        <p className="select-none text-white mb-4">
          Embark on a transformative fitness journey with us, where your aspirations and goals become our guiding mission.
          Our dedicated platform is designed to match you with the perfect fitness coach, tailored precisely to your unique needs.
          Whether you're aiming to conquer the boxing ring, strengthen your body through expert training, or embark on a transformative
          weight loss journey, we're here to be your compass, steering you towards the coach who will elevate your fitness endeavors.
          Our commitment to your success forms the foundation of your voyage, as we combine passion, expertise, and dedication to ensure
          that your fitness journey truly begins here.
        </p>
      </div>
        
        <SearchBox />
      </div>
    </section>
  );
};

export default StartJourney;
