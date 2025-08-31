import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData();
  }, [user, filter]);

  const getData = async () => {
    if (!user?.email) return;
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/appliedJobs/${
        user?.email
      }?filter=${filter}`,
      {
        withCredentials: true,
      }
    );
    setJobs(data);
  };

  return (
    <section className="container mx-auto px-4 pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Applied Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs.length} Jobs
        </span>
      </div>

      <div className="flex justify-center">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          name="category"
          id="category"
          className="border rounded-lg p-4"
        >
          <option value="">Filter By Category</option>
          <option value="On Site">On Site</option>
          <option value="Remote">Remote</option>
          <option value="Part-Time">Part Time</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="flex flex-col mt-6">
        <div className="lg:-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="lg:overflow-hidden overflow-x-auto  border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price Range</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {jobs.map((job) => (
                    <tr key={job._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {job.jobTitle}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {new Date(job.applicationDeadline).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${job.salaryRange}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1 rounded-full 
                           text-xs ${
                             job.category === "On Site" &&
                             "text-blue-500 bg-blue-100/60"
                           }

                           ${
                             job.category === "Remote" &&
                             "text-emerald-500 bg-emerald-100/60"
                           }

                            ${
                              job.category === "Hybrid" &&
                              "text-pink-500 bg-pink-100/60"
                            }

                             ${
                               job.category === "Part-Time" &&
                               "text-red-500 bg-red-100/60"
                             }

                           `}
                          >
                            {job.category}
                          </p>
                        </div>
                      </td>
                      <td
                        title=""
                        className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                      >
                        {job.description.substring(0, 18)}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppliedJobs;
