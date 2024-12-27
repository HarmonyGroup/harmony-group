"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import BG from "@/assets/asset-1.jpg";
import Link from "next/link";
import { FaAward } from "react-icons/fa";
import "@/app/globals.css";
import { MdArrowOutward } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // if (typeof window !== "undefined") {
      const timeline = gsap.timeline();
      timeline.fromTo(
        heroRef.current,
        { scale: 1.1, opacity: 0 }, // Start with a smaller scale and opacity
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" } // Animate to full size and opacity
      );
    // }
  }, []);

  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1559585888-6b01c8ea796b?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className="absolute inset-0 bg-black/75 sm:bg-black/0 sm:bg-gradient-to-r sm:from-black/95 sm:to-black/70 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l backdrop-blur-none"></div>

      <div className="relative mx-auto max-w-7xl px-5 py-32 flex h-[100vh] lg:h-[100vh] items-center">
        <div className="max-w-2xl text-center sm:text-left mt-0 sm:mt-10" ref={heroRef}>
          <p className="inline-flex items-center gap-1 text-orange-600 bg-orange-600/10 text-xs border-[1px] border-orange-600/20 rounded-full px-3 py-2">
            {/* <FaAward />
            Building sustainable solutions */}
            <GoGlobe size={11} className="mt-0.5" /> www.harmonygroup.com
          </p>
          <h1 className="text-3xl font-extrabold text-white sm:text-6xl mt-6 whitespace-nowrap">
            One Vision. <br /> Infinite{" "}
            <span className="text-orange-600">Possibilities.</span>
          </h1>

          <p className="mt-5 max-w-4xl text-white text-sm leading-relaxed text-white/90">
            We are committed to building sustainable solutions. Our subsidiaries
            work together to create value, foster growth, and deliver innovative
            products and services that transform industries and improve lives.
          </p>
          <div className="mt-7 inline-block">
            <Link
              href={"/"}
              className="flex items-center gap-2 text-white text-sm underline underline-offset-8"
            >
              Learn More <MdArrowOutward size={15} className="mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
