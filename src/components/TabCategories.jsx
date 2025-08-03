import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategories = () => {
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold text-center">
          Browse Job according to the categories
        </h1>

        <div className="flex items-center justify-center lg:mt-8 mt-4 md:mt-6">
          <TabList>
            <Tab>On Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part Time</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>

        <TabPanel>
          <h2>
            <JobCard></JobCard>
          </h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
