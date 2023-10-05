import React, { useEffect, useState } from 'react';

const MainSectionPrivacy = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const delay = 200; 
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className={`'transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-2xl mb-4">About Us</h1>
      <p>Hi there! We are Olivier and Asma, two boxing enthusiasts with years of experience in the ring.</p>
      <p>Hailing from France, we have dedicated ourselves to the sport and honed our skills over the years.</p>
      <p>Now, we have come together to create this website with a clear objective in mind: to help you find the perfect coach who suits your specific needs.</p>
      <p>Whether you're a beginner looking to learn the ropes or an experienced boxer aiming to take your skills to the next level, we are here to guide you on your boxing journey.</p>
      <p>With our expertise and passion for the sport, we are committed to providing you with the best possible recommendations and support. Let's lace up our gloves and embark on this exciting adventure together!</p>
    </div>
    </div>
  );
};

export default MainSectionPrivacy;
