import React from "react";

const ChooseJobSphere = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16 text-center container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Why Choose JobSphere?
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
        JobSphere connects job seekers with the right opportunities. We make it
        easy to post, search, and apply for jobs with a seamless user
        experience.
      </p>
      <ul className="mt-6 space-y-2 text-gray-700 text-sm md:text-base">
        <li> Easy job posting for employers</li>
        <li> Quick application process for seekers</li>
        <li> Remote, Hybrid, Part-Time, and On-Site jobs</li>
        <li> Safe and secure platform</li>
      </ul>
    </section>
  );
};

export default ChooseJobSphere;
