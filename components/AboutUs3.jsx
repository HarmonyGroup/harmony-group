"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoPlay } from "react-icons/go";

const AboutUs3 = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      gsap.fromTo(
        leftContentRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightContentRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-orange-600 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          ref={leftContentRef}
          className="min-h-[70vh] w-full max-w-md mx-auto px-5 sm:px-0 py-24 order-1"
        >
          <div className="flex items-center gap-2">
            <div className="w-[25px] sm:w-[40px] h-[1px] bg-white"></div>
            <span className="text-white text-xs font-medium">OUR VISION</span>
          </div>
          <p className="text-white text-base font-medium mt-14">
            Our multidisciplinary approach ensures that we remain adaptable,
            relevant, and impactful in a constantly changing landscape.
          </p>
          <p className="text-white/90 text-sm font-light mt-6">
            we see every challenge as an opportunity to grow and make a
            difference. As we expand our reach and refine our expertise, we
            remain dedicated to delivering innovative solutions that shape a
            better world. Our journey is a testament to our belief in hard work,
            resilience, and collaboration.
          </p>
          <div className="flex items-center gap-2 text-white underline underline-offset-8 mt-6">
            <GoPlay size={15} className="mt-0.5" />
            <span className="text-sm">Learn More</span>
          </div>
        </div>
        <div className="relative bg-[url(https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover h-[70vh] bg-gray-200 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-t from-[#161B21]/70 to-[#161B21]/20 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3;
