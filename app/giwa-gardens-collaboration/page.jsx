"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroBG from "@/assets/asset-16.jpg";
import PromoIcon from "../../assets/asset-18.png";
import Image1 from "@/assets/asset-18.png";
import Image2 from "@/assets/asset-19.jpg";
import Image3 from "@/assets/asset-20.jpg";
import BarcodeImage from "@/assets/asset-21.jpeg";
import Image from "next/image";
import GiwaLogo from "@/assets/giwa-gardens-logo.png";
import BookMeLogo from "@/assets/bookme-logo.png";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import BarcodeModal from "@/components/BarcodeModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  // Create refs for elements we want to animate
  const logoSectionRef = useRef(null);
  const headingRef = useRef(null);
  const promoTagRef = useRef(null);
  const pricingRef = useRef(null);
  const buttonRef = useRef(null);
  const footerTextRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for our animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Logo section animation - fade in and slide up
    gsap.fromTo(
      logoSectionRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: logoSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Heading animation - letters appear one by one
    const headingElement = headingRef.current;
    if (headingElement) {
      // Split text animation (simplified version)
      gsap.fromTo(
        headingElement,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: headingElement,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Promo tag animation - bounce in
    if (promoTagRef.current) {
      gsap.fromTo(
        promoTagRef.current,
        {
          scale: 0,
          rotation: -10,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (pricingRef.current) {
      gsap.fromTo(
        pricingRef.current,
        {
          scale: 0,
          rotation: -10,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Button animation - pulse
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          onComplete: () => {
            // Add a subtle pulse animation after the button appears
            gsap.to(buttonRef.current, {
              scale: 1.05,
              duration: 0.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            });
          },
        }
      );
    }

    // Footer text animation - fade in
    if (footerTextRef.current) {
      gsap.fromTo(
        footerTextRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        logoSectionRef.current,
        headingRef.current,
        pricingRef.current,
        promoTagRef.current,
        buttonRef.current,
        footerTextRef.current,
      ]);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen w-full bg-darkGreen flex flex-col items-center justify-center overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-sky-400/85 z-10"></div>

        <Image
          src={HeroBG || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div ref={logoSectionRef} className="flex items-center gap-3 mb-5 z-30">
          <Image
            src={GiwaLogo || "/placeholder.svg"}
            height={90}
            width={90}
            className="relative z-10"
            alt=""
            loading="lazy"
          />
          <span className="text-white text-xl relative z-10">+</span>
          <Image
            src={BookMeLogo || "/placeholder.svg"}
            height={170}
            width={170}
            className="relative z-10"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="relative">
          <h1
            ref={headingRef}
            style={{ textShadow: "5px 5px 7px rgba(0,0,0,0.7)" }}
            className="uppercase relative text-5xl sm:text-9xl text-white text-center font-bold z-10"
          >
            5 Seasons <br /> for a family <br /> of five
          </h1>

          <div
            ref={promoTagRef}
            className="hidden absolute z-30 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-base sm:text-3xl rounded-full h-24 w-24 sm:flex flex-col items-center justify-center -top-14 right-0"
          >
            &#x20A6;150K <br />
            <span className="text-sm line-through">&#x20A6;550K</span>
          </div>

          <div ref={pricingRef} className="relative z-10">
            <p
              style={{ textShadow: "1px 2px 2px rgba(0,0,0,0.5)" }}
              className="relative text-white text-2xl text-center z-10 mt-5 block sm:hidden"
            >
              {" "}
              Now &#x20A6;150K
            </p>
            <p
              style={{ textShadow: "1px 2px 2px rgba(0,0,0,0.5)" }}
              className="relative text-white/70 text-sm text-center line-through z-10 mt-1 block sm:hidden"
            >
              Was &#x20A6;500K
            </p>
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={() => setShowModal(true)}
          style={{ textShadow: "1px 2px 2px rgba(0,0,0,0.5)" }}
          className="relative text-white text-2xl sm:text-3xl font-light bg-gradient-to-b from-amber-300 to-yellow-500 rounded-lg px-5 py-2 z-10 mt-6"
        >
          CLICK HERE TO SCAN
        </button>

        <p
          ref={footerTextRef}
          className="text-sm text-white/80 text-center relative z-10 mt-4"
        >
          Offer valid while promotion is ongoing. For more information <br />{" "}
          about giwa gardens visit www.giwagardens.com
        </p>
      </section>

      {showModal && <BarcodeModal toggleModal={() => setShowModal(false)} />}
    </>
  );
};

export default Page;
