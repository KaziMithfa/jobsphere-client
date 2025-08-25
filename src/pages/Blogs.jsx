import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Blogs
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Blog 1 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-2xl">
          <h2 className="text-lg sm:text-xl font-semibold">
            What is an access token and refresh token?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            An <strong>access token</strong> is a short-lived credential that
            allows the client to access protected resources. A
            <strong> refresh token</strong> is a long-lived credential used to
            get new access tokens.
            <br />
            <br /> Access tokens → store in memory or httpOnly cookies. Refresh
            tokens → store in httpOnly cookies for security.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-2xl">
          <h2 className="text-lg sm:text-xl font-semibold">
            What is Express.js? What is Nest.js?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Express.js</strong> is a minimal and flexible Node.js
            framework for building APIs and web apps.
            <br />
            <br />
            <strong>Nest.js</strong> is a structured, scalable Node.js framework
            built with TypeScript, inspired by Angular, and suited for large
            projects.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-2xl md:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold">
            Explain your code
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            In my website, I developed a platform where users can add jobs under
            different categories and also apply for jobs posted by others. I
            used React for the frontend, Node.js and Express.js for the backend,
            and MongoDB for data storage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
