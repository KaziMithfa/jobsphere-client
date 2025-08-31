import React from "react";
import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";
import ChooseJobSphere from "../components/ChooseJobSphere";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <TabCategories></TabCategories>
      <ChooseJobSphere></ChooseJobSphere>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
