"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MdCircle } from "react-icons/md";
import { FaTrademark } from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={navbarRef}
        className={`w-full fixed top-0 z-10 ${
          isScrolled ? "glassmorphism" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-6 sm:py-10">
          <div className="flex items-center justify-between">
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
            <div className="hidden md:flex items-center gap-14 text-white text-[13px] font-semibold">
              <div className="relative">
                <Link href={"/"}>About</Link>
              </div>
              <div className="relative">
                <Link href={"/careers"}>Careers</Link>
              </div>
              <div className="relative">
                <Link href={"/contact"}>Contact</Link>
              </div>
              {/* <div className="relative">
              <Link href={"/"}>Blog</Link>
            </div> */}
            </div>
            <button onClick={() => setMobileNav(true)} className="block md:hidden">
              <TbDotsVertical color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}
    </div>
  );
};

export default Navbar;
