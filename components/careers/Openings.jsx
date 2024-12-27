"use client";

import { useEffect, useRef } from "react";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Openings = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      contentRef.current,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div
        ref={contentRef}
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6"
      >
        <div>
          <p className="text-orange-400 text-sm font-medium text-center underline underline-offset-8">
            Vacancies
          </p>
          <h4 className="text-xl sm:text-3xl text-center font-semibold mt-6">
            Available Openings
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-20 sm:mt-20">
          <div className="bg-gray-100 text-gray-400 rounded-full p-4">
            <LuBriefcaseBusiness size={25} />
          </div>
          <p className="text-gray-500 text-sm text-center">
            No vacancy. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Openings;
