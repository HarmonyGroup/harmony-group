import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaTrademark } from "react-icons/fa6";

const MobileNav = ({ mobileNav, setMobileNav }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      gsap.fromTo(
        backgroundRef.current,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 bg-orange-600 flex flex-col gap-10 z-50 px-4 overflow-hidden"
    >
      <div className="w-full flex items-center justify-between mt-8">
        <Link
          href={"/"}
          className="flex flex-col gap-0 sm:gap-0.5 text-white text-sm sm:text-xl font-bold"
        >
          <span className="flex gap-1.5">
            Harmony Group <FaTrademark size={13} />
          </span>
          <span className="text-[11px] sm:text-xs font-normal">
            Expanding Possibilities...
          </span>
        </Link>
        <button onClick={() => setMobileNav(false)}>
          <IoClose color="white" size={20} />
        </button>
      </div>
      <div className="flex flex-col">
        <Link onClick={() => setMobileNav(false)} href={"/"} className="text-white text-sm border-b border-white/35 py-4">
          Home
        </Link>
        <Link onClick={() => setMobileNav(false)} href={"/"} className="text-white text-sm border-b border-white/35 py-4">
          About
        </Link>
        <Link onClick={() => setMobileNav(false)} href={"/careers"} className="text-white text-sm border-b border-white/35 py-4">
          Careers
        </Link>
        <Link onClick={() => setMobileNav(false)} href={"/contact"} className="text-white text-sm border-b border-white/35 py-4">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
