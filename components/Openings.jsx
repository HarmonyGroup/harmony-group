"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Openings = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof window !== "undefined") {
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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  return (
    <section className="bg-orange-600 overflow-x-hidden">
      <div className="px-5 py-16 md:py-24">
        <div ref={contentRef} className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-normal text-white md:text-5xl">
            Work With Us
          </h2>
          <Link
            href={"/"}
            className="inline-flex items-center gap-2 text-white text-sm md:text-lg mt-1 md:mt-4"
          >
            View Open Positions
            <MdArrowOutward className="mt-1" />
          </Link>

          {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Openings;
