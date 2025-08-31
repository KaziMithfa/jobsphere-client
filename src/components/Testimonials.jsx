import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 text-center border-t container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        What Our Users Say
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <blockquote className="text-gray-600 text-sm md:text-base">
          "JobSphere helped me land my first remote job within a week. The
          process was smooth and simple."
          <span className="block mt-2 font-semibold text-gray-800">
            – Sarah J.
          </span>
        </blockquote>
        <blockquote className="text-gray-600 text-sm md:text-base">
          "As an employer, I found great candidates quickly. Posting jobs is
          very straightforward here."
          <span className="block mt-2 font-semibold text-gray-800">
            – Mark R.
          </span>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
