"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoPlay } from "react-icons/go";

const AboutUs2 = () => {
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
    <div className="bg-[#161B21] overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="min-h-[70vh] w-full max-w-md mx-auto px-5 sm:px-0 py-24"
          ref={leftContentRef}
        >
          <div className="flex items-center gap-2">
            <div className="w-[25px] sm:w-[40px] h-[1px] bg-orange-600"></div>
            <span className="text-orange-600 text-xs font-medium">
              ABOUT US
            </span>
          </div>
          <p className="text-white text-base font-medium mt-14">
            Welcome to Harmony Group, where innovation meets excellence. We are
            a diverse conglomerate with thriving subsidiaries in Agriculture,
            Real Estate, and Technology.
          </p>
          <p className="text-white/90 text-sm font-light mt-6">
            Established on the principles of integrity, quality, and
            forward-thinking, we are committed to transforming lives through our
            products, services, and solutions. Each of our subsidiaries operates
            independently yet collaboratively, delivering unparalleled expertise
            and innovation in their respective fields.
          </p>
          <div className="flex items-center gap-2 text-orange-600 underline underline-offset-8 mt-6">
            <GoPlay size={15} className="mt-0.5" />
            <span className="text-sm">Watch video</span>
          </div>
        </div>
        <div
        //   ref={rightContentRef}
          className="relative bg-[url(https://images.unsplash.com/photo-1503423571797-2d2bb372094a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat h-[70vh] bg-gray-200 hidden sm:block"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#161B21] to-transparent rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
