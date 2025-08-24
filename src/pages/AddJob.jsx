import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deadLineDate, setDeadLineDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleAddJob = async (e) => {
    e.preventDefault();

    const form = e.target;
    const jobBanner = form.job_banner.value.trim();
    const jobTitle = form.job_title.value.trim();
    const name = form.user_name.value.trim();
    const email = form.email.value.trim();
    const category = form.category.value.trim();
    const salaryRange = form.salary.value.trim();
    const jobPostingDate = startDate;
    const applicationDeadline = deadLineDate;
    const description = form.description.value.trim();

    const jobApplicants = parseInt(form.job_applicants.value);

    if (
      !jobBanner ||
      !jobTitle ||
      !name ||
      !email ||
      !category ||
      !salaryRange ||
      !jobPostingDate ||
      !applicationDeadline ||
      !description
    ) {
      toast.error("please fill in all the required fields before submitting ");
      return;
    }

    const jobData = {
      jobBanner,
      jobTitle,
      name,
      email,
      category,
      salaryRange,
      description,
      jobApplicants,
      jobPostingDate,
      applicationDeadline,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        jobData
      );
      console.log(data);
      toast.success("Job Data Updated Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add a Job
        </h2>

        <form onSubmit={handleAddJob}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-gray-700  " htmlFor="job_banner">
                Picture URL for the job banner
              </label>
              <input
                id="job_banner"
                name="job_banner"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-gray-700  " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="user_name">
                User Name
              </label>
              <input
                id="user_name"
                name="user_name"
                disabled
                defaultValue={user?.displayName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Salary Range</label>
              <input
                id="salary"
                type="text"
                name="salary"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Job Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 " htmlFor="job_posting_date">
                Job Posting Date
              </label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 " htmlFor="application_deadline">
                Application DeadLine
              </label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={deadLineDate}
                onChange={(date) => setDeadLineDate(date)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>

          <div className="mt-2  px-4 py-2">
            <label className="text-gray-700 " htmlFor="job_applicants">
              Job Applicants Number
            </label>
            <input
              id="job_applicants"
              name="job_applicants"
              defaultValue={0}
              disabled
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
