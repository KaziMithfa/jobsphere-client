import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    name,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    salaryRange,
    category,
    jobApplicants,
  } = job;
  console.log(_id);

  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-gray-600">
          Job Posting Date :{jobPostingDate}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
            {jobTitle}
          </h1>

          <h2 className=" mt-2 text-sm font-bold text-gray-600">
            Name: {name}
          </h2>
        </div>

        <p className="mt-2 text-sm text-gray-600 ">
          Job Applicants Number: {jobApplicants}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Salary Range: {salaryRange} $
        </p>
        <div className="flex items-center justify-between ">
          <p className="text-sm font-bold text-gray-600">
            Deadline :{applicationDeadline}
          </p>

          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
