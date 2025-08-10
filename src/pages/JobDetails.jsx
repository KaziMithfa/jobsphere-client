import React from "react";

const JobDetails = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen">
      <div className="w-full sm:max-w-sm lg:max-w-3xl md:max-w-2xl px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-600">
            Job Posting Date :
          </span>
          <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full "></span>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h1 className="mt-2 text-lg font-semibold text-gray-800 "></h1>

            <h2 className=" mt-2 text-sm font-bold text-gray-600">
              Name: {name}
            </h2>
          </div>

          <p className="mt-2 text-sm text-gray-600 ">Job Applicants Number:</p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">Salary Range:</p>
          <div className="flex items-center justify-between ">
            <p className="text-sm font-bold text-gray-600">Deadline :</p>

            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
