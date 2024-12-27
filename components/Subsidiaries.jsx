"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HarmonyStoresImage from "@/assets/asset-2.jpg";
import PremierGadgetsImage from "@/assets/asset-3.png";
import SolarHubImage from "@/assets/asset-4.jpg";
import HarmonyEnt from "@/assets/asset-6.jpg";
import HarmonyHomes from "@/assets/asset-7.jpg";
import HarmonyFarms from "@/assets/asset-8.jpg";
import { FiExternalLink } from "react-icons/fi";

const Subsidiaries = () => {
  const headerRef = useRef(null);
  const harmonyStoresRef = useRef(null);
  const premierGadgetsRef = useRef(null);
  const solarHubRef = useRef(null);
  const harmonyHomesRef = useRef(null);
  const harmonyFarmhouseRef = useRef(null);
  const harmonyEntertainmentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      gsap.fromTo(
        headerRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        harmonyStoresRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: harmonyStoresRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        premierGadgetsRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: premierGadgetsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        solarHubRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: solarHubRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        harmonyHomesRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: harmonyHomesRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        harmonyFarmhouseRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: harmonyFarmhouseRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        harmonyEntertainmentRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: harmonyEntertainmentRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6">
        <div ref={headerRef}>
          <p className="text-orange-400 text-sm font-medium text-center underline underline-offset-8">
            Subsidiaries
          </p>
          <h4 className="text-xl sm:text-3xl text-center font-semibold mt-6">
            Learn About Our Companies
          </h4>
        </div>
        <div className="flex flex-col gap-16 mt-20 sm:mt-24">

          {/* Harmony Stores */}
          <article
            ref={harmonyStoresRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={HarmonyStoresImage}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-5 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Harmony Stores NG
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm relaxed text-gray-500">
                  Harmony Stores NG is an innovative Nigerian retail technology
                  company that prides itself on delivering top-quality
                  computers, mobile phones, gadgets, and much more. Established
                  in 2010 as a single gadget retail store, we have grown
                  exponentially to become a trusted provider of sales and
                  services to millions of happy customers all over Nigeria.
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link target="_blank" href="https://harmonystores.ng" className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95">
                  WEBSITE
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Premier Gadgets */}
          <article
            ref={premierGadgetsRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={PremierGadgetsImage}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Premier Gadgets NG
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Premier Gadgets NG is your one-stop shop for all things tech!
                  Whether you're searching for the latest smartphones, powerful
                  laptops, smart home devices, or essential accessories, we've
                  got it all. Our collection of gadgets is handpicked to offer
                  cutting-edge technology, unbeatable performance, and
                  competitive prices. Enjoy unbeatable prices, exclusive deals,
                  and discounts that help you get the best value for your money.
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  target="_blank" href="https://premiergadgets.ng"
                  className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95"
                >
                  Website
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Solar Hub NG */}
          <article
            ref={solarHubRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={SolarHubImage}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Solar Hub NG
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Solar Hub NG is a leading provider of innovative solar energy
                  solutions dedicated to powering a sustainable future. With a
                  passion for renewable energy, we specialize in the sale,
                  installation, and maintenance of high-quality solar panels,
                  batteries, inverters, generators, and street lights. Our
                  comprehensive range of products and services is designed to
                  meet the diverse energy needs of homes, businesses, and
                  communities.
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  target="_blank" href="https://solarhub.ng"
                  className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95"
                >
                  Website
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Harmony Homes NG */}
          <article
            ref={harmonyHomesRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={HarmonyHomes}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Harmony Homes NG
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Harmony Homes NG is a real estate broker registered in the
                  Federal Republic of Nigeria. Whether you're stepping into
                  homeownership for the first time, building wealth as an
                  investor, or simplifying life by downsizing, Harmony Homes has
                  got you covered. Let's turn your real estate vision into
                  reality—because your dream home deserves a dream team!
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  target="_blank" href="https://harmonyhomes.ng"
                  className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95"
                >
                  Website
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Harmony Farmhouse NG */}
          <article
            ref={harmonyFarmhouseRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={HarmonyFarms}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Harmony Farmhouse NG
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  At Harmony Farmhouse, we strive to deliver the best livestock
                  products to ensure optimal nutrition for our customers. We
                  also aim to support local communities by creating job
                  opportunities and fostering partnerships with local
                  businesses. From raising our livestock with care and ethical
                  practices to maintaining rigorous health standards and
                  sustainable methods, we ensure that only the best reaches your
                  table.
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  target="_blank" href="https://harmonyfarmhouse.ng"
                  className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95"
                >
                  Website
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Harmony Entertainment */}
          <article
            ref={harmonyEntertainmentRef}
            className="flex flex-col sm:flex-row bg-orange-50 transition hover:shadow-xl"
          >
            <div className="block sm:basis-56">
              <Image
                alt=""
                src={HarmonyEnt}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Harmony Entertainment
                  </h3>
                </a>

                <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  target="_blank" href="https://harmonyentertainment.ng"
                  className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-orange-500/95"
                >
                  Website
                  <FiExternalLink size={14} className="-mt-0.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Subsidiaries;
