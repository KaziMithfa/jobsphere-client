import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}`
    );
    setJobs(data);
  };

  return (
    <div>
      <h1>{jobs.length}</h1>
    </div>
  );
};

export default AppliedJobs;
