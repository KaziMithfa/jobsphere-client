import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img from "../assets/images/banner1.jpg";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const JobDetails = () => {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const today = new Date();
  const {
    _id,
    name,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    description,
    salaryRange,
    category,
    jobBanner,
    jobApplicants,
    buyer,
  } = job || {};

  const applyJob = async (e) => {
    e.preventDefault();
    const form = e.target;

    const resume = form.resume.value;
    const email = form.email.value;
    const name = form.name.value;

    const appliedJob = {
      resume,
      email,
      name,
      jobTitle,
      category,
      salaryRange,
      jobApplicants,
      jobBanner,
      buyer_email: buyer?.email,
      buyer_name: buyer?.name,
      applicationDeadline,
      jobPostingDate,
    };

    const deadlineDate = new Date(applicationDeadline);

    if (today > deadlineDate) {
      toast.error("You can not apply now the deadline is finished");
      return;
    }

    if (user?.email === buyer?.email) {
      toast.error("You can not apply to your own job");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/appliedjob`,
        appliedJob
      );
      console.log(data);
      toast.success("Your job has been applied Successfully");
    } catch (err) {
      console.log(err);
    }
  };

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
              {description}
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Apply
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Wecome!. You can apply here for the job...
                </h3>
                <form onSubmit={applyJob}>
                  <div className="mt-4 md:mt-6 lg:mt-6">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Your Email
                    </label>
                    <input
                      className="block border w-full text-gray-700 bg-white  rounded-lg  "
                      type="email"
                      name="email"
                      disabled
                      defaultValue={user?.email}
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Your Name
                    </label>
                    <input
                      className="block w-full border text-gray-700 bg-white  rounded-lg  "
                      type="text"
                      name="name"
                      disabled
                      defaultValue={user?.displayName}
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor=""
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Submit Resume Link
                    </label>
                    <input
                      className="block w-full border text-gray-700 bg-white  rounded-lg p-2 "
                      type="text"
                      name="resume"
                    />
                  </div>

                  <button className="btn w-full text-center text-black mt-3 ">
                    {" "}
                    Submit
                  </button>
                </form>

                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
