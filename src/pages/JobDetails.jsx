import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../assets/images/banner1.jpg";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    name,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    salaryRange,
    category,
    jobBanner,
    jobApplicants,
  } = job || {};

  return (
    <div className="flex justify-center">
      <div className=" max-w-2xl  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={jobBanner}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {category}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {jobTitle}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {salaryRange} $
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {applicationDeadline}
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
