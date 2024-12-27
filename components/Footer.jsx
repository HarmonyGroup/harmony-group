"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaTrademark } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
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
  }, []);

  return (
    <footer className="bg-[#161B21] overflow-x-hidden">
      <div ref={contentRef} className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <h4 className="flex justify-center gap-1.5 text-white text-lg sm:text-2xl text-center font-bold">
          Harmony Group <FaTrademark size={15} />
        </h4>
        <p className="text-white/70 text-xs text-center mt-1 sm:mt-2">
          Expanding Possibilities...
        </p>

        <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-white/70">
          Our journey is a testament to our belief in hard work and
          collaboration. Together, let&apos;s create a future where innovation,
          sustainability, and progress come together to inspire new
          possibilities.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link className="text-white/70 text-sm transition" href="/about">
              {" "}
              About{" "}
            </Link>
          </li>

          <li>
            <Link className="text-white/70 text-sm transition" href="/careers">
              {" "}
              Careers{" "}
            </Link>
          </li>

          <li>
            <Link className="text-white/70 text-sm transition" href="/contact">
              {" "}
              Contact{" "}
            </Link>
          </li>

          {/* <li>
            <Link className="text-white/70 text-sm transition" href="/blog">
              {" "}
              Blog{" "}
            </Link>
          </li> */}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8 text-white/70">
          <li>
            <Link
              target="_blank"
              href={"https://www.instagram.com/harmonygroupng/"}
            >
              <IoLogoInstagram size={22} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={
                "https://www.tiktok.com/@harmonygroupng?_t=8sZ264F9ED0&_r=1"
              }
            >
              <IoLogoTiktok size={20} />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@HarmonyGroup"}
            >
              <PiYoutubeLogo size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
