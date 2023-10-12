import React from 'react';
import asmaoli from '../img/asmaoli.png'; 

const AboutUs = () => {
  return (
    <section className="bg-black p-8 pt-0">
      <div className="mx-auto text-white flex flex-wrap items-center">
        <div className="flex-1 pr-4">
          <h2 className="select-none text-2xl font-bold mb-4">About Us</h2>
          <p className="select-none">
            Hi there! We are Olivier and Asma, two boxing enthusiasts with years of experience in the ring. Hailing from
            France, we have dedicated ourselves to the sport and honed our skills over the years. Now, we have come together
            to create this website with a clear objective in mind: to help you find the perfect coach who suits your specific
            needs. Whether you're a beginner looking to learn the ropes or an experienced boxer aiming to take your skills to
            the next level, we are here to guide you on your boxing journey. With our expertise and passion for the sport, we
            are committed to providing you with the best possible recommendations and support. Let's lace up our gloves and
            embark on this exciting adventure together!
          </p>
        </div>
        <div className="pointer-events-none flex lg:flex-1">
          <img src={asmaoli} className="mt-7 w-50 lg:w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
