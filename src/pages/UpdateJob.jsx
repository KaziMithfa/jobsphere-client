import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateJob = () => {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [deadLineDate, setDeadLineDate] = useState(new Date());

  const handleUpdateJob = async (e) => {
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

    const jobData = {
      jobBanner,
      jobTitle,
      category,
      salaryRange,
      description,
      jobApplicants,
      jobPostingDate,
      applicationDeadline,
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/job/${job._id}`,
        jobData
      );
      toast.success("You have updated the job successfully...!");
      navigate("/my-jobs");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-gray-900 ">
        You can update your job information here....
      </h1>

      <form onSubmit={handleUpdateJob}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-gray-700  " htmlFor="job_banner">
              Picture URL for the job banner
            </label>
            <input
              id="job_banner"
              name="job_banner"
              type="text"
              defaultValue={job.jobBanner}
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
              defaultValue={job.jobTitle}
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
              defaultValue={job.salaryRange}
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
              defaultChecked={job.category}
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
              selected={job.jobPostingDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 " htmlFor="application_deadline">
              Application DeadLine
            </label>
            <DatePicker
              className="border p-2 rounded-md"
              selected={job.applicationDeadline}
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
            defaultValue={job.description}
          ></textarea>
        </div>

        <div className="mt-2  px-4 py-2">
          <label className="text-gray-700 " htmlFor="job_applicants">
            Job Applicants Number
          </label>
          <input
            id="job_applicants"
            name="job_applicants"
            defaultValue={job.jobApplicants}
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
    </div>
  );
};

export default UpdateJob;
