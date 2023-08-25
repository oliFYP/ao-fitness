import React from 'react';
import SearchBox from './SearchBox';

const StartJourney = () => {
  return (
    <section className="bg-black p-8">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <div className="w-full sm:w-2/3 text-white text-left pr-4 mb-4 sm:mb-0">
          <h1 className="text-5xl font-bold mb-4">Your fitness journey starts here</h1>
          <p>
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
