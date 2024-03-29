import React, { useState, useEffect } from "react";
import coach from "../img/coach.jpg";
import TopBar from "./TopBar";

import StartJourney from "./StartJourney";

const MainSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleScrollToStartJourney = () => {
    const startJourneySection = document.getElementById("startJourney");
    if (startJourneySection) {
      startJourneySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div>
      <section className="relative " style={{ overflow: "hidden" }}>
        <div
          className="relative top-0 left-0 w-full h-[600px] lg:h-[700px] xl:h-[800px] bg-center bg-cover"
          style={{ backgroundImage: `url(${coach})` }}
        />
        <TopBar />
        <div
          className={`absolute top-1/4 ml-5 mr-5 sm:left-1/4 transform ${
            isLoaded
              ? "translate-y-0 opacity-100 transition-all duration-1000 ease-out"
              : "-translate-y-16 opacity-0"
          }`}
        >
          <h1 className="select-none text-white font-bold text-4xl md:text-4xl lg:text-6xl max-w-md">
            {" "}
            Welcome!{" "}
          </h1>
          <p className="select-none text-white font-bold mt-3 text-lg  lg:text-3xl lg:mt-10 max-w-md">
            Welcome to our platform dedicated to helping you discover the
            perfect fitness coach on your journey towards a healthier lifestyle
          </p>
          <button
            className="rounded-2xl bg-white mt-10 w-40 h-10 font-bold text-black flex items-center justify-center"
            onClick={handleScrollToStartJourney}
          >
            Get Started
          </button>
        </div>
        <div className="absolute bottom-0 w-full h-22">
          <div className="relative h-50 bg-gradient-to-b from-transparent via-black to-black p-9"></div>
        </div>
      </section>

      <section id="startJourney">
        <StartJourney />
      </section>
    </div>
  );
};

export default MainSection;
