import React, { useState, useEffect } from "react";

const Stats = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [clientAUM, setClientAUM] = useState(0);
  useEffect(() => {
    const incrementValues = (target, setter, incrementSpeed) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value < target) {
          value += 1;
          setter(value);
        } else {
          clearInterval(interval);
        }
      }, incrementSpeed);
    };

    incrementValues(10, setExperience, 100);
    incrementValues(50, setClients, 50);
    incrementValues(10, setCountries, 150);
    incrementValues(100, setClientAUM, 30);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(incrementValues);
    };
  }, []);
  return (
    <div className="sm:flex sm:flex-wrap grid grid-cols-2  sm:justify-around items-center  py-14 bg-white gap-5 sm:gap-0">
      <div className=" mb-6 sm:mb-0 flex justify-center flex-col items-center sm:block">
        <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-4xl">
          {experience}+
        </p>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
          Years of Experience
        </p>
      </div>
      <div className=" mb-6 sm:mb-0 flex justify-center flex-col items-center sm:block">
        <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-4xl">
          {clients}+
        </p>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
          Clients Empowered
        </p>
      </div>
      <div className=" mb-6 sm:mb-0 flex justify-center flex-col items-center sm:block">
        <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-4xl">
          {countries}+
        </p>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
          Countries Served
        </p>
      </div>
      <div className=" mb-6 sm:mb-0 flex justify-center flex-col items-center sm:block">
        <p className="text-sm mb-3 font-bold text-red-600 sm:text-xl md:text-2xl lg:text-4xl">
          ${clientAUM}+Bn
        </p>
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold">
          Client AUM
        </p>
      </div>
    </div>
  );
};

export default Stats;
