import React from "react";

const Slide = ({ image, title, description }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-center w-full h-full ">
        <div className="text-center ">
          <h1 className="text-3xl font-semibold text-white   lg:text-5xl drop-shadow-lg ">
            {title}
          </h1>
          <br />
          <p className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
