"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      heroRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className="absolute inset-0 bg-black/75 sm:bg-black/0 sm:bg-gradient-to-r sm:from-black/95 sm:to-black/70 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l backdrop-blur-none"></div>

      <div className="relative mx-auto max-w-7xl px-5 py-32 flex h-[100vh] lg:h-[100vh] items-center">
        <div className="w-full text-center mt-0 sm:mt-10" ref={heroRef}>
          <h1 className="text-4xl text-center font-extrabold text-white sm:text-6xl mt-6">
            We&apos;d <span className="text-orange-600">love</span> to <br /> hear from you
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-white text-sm leading-relaxed text-white/90">
            At Harmony Group NG, we are committed to our values and believe in
            developing and investing in our people. We believe in seeking
            excellence with autonomy and creating a community of passionate
            professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
