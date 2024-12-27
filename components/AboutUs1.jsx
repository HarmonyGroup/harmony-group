"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Founder from "@/assets/founder.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs1 = () => {
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
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-orange-50 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-5 py-24 sm:py-36" ref={contentRef}>
        <h4 className="w-full max-w-2xl mx-auto text-orange-600 text-center text-lg md:text-2xl font-light">
          <RiDoubleQuotesL size={35} /> <br />
          With a presence in Agriculture, Real Estate, and Technology, we have
          built a reputation for transforming challenges into opportunities. Our
          subsidiaries operate with a shared vision of delivering impactful
          solutions that not only meet today's needs but also shape a better
          tomorrow.
        </h4>
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={Founder}
              layout="fill"
              objectFit="cover"
              alt="Olusegun Adebayo"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base md:text-lg font-bold text-orange-600">
              Olusegun Adebayo
            </p>
            <p className="text-xs md:text-sm font-semibold text-orange-600">
              Founder, Harmony Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
