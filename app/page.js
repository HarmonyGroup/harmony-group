import AboutUs1 from "@/components/AboutUs1";
import AboutUs2 from "@/components/AboutUs2";
import AboutUs3 from "@/components/AboutUs3";
import Hero from "@/components/Hero";
import Openings from "@/components/Openings";
import Subsidiaries from "@/components/Subsidiaries";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <AboutUs1 />
      <AboutUs2 />
      <AboutUs3 />
      <Subsidiaries />
      <Openings />
    </div>
  );
};

export default Page;
