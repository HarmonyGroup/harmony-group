import Link from "next/link";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { PiYoutubeLogo } from "react-icons/pi";
import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const ContactForm = () => {
  return (
    <div>
      <div className="w-full mx-auto max-w-7xl grid grid-cols-2 gap-10 px-5 py-24">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-base sm:text-xl font-bold">Get in touch</h1>
          <p className="text-sm mt-6">
            4, Francis Oremeji Street, Ikeja, Lagos, Nigeria
          </p>
          <ul className="mt-6 flex items-center gap-6 md:gap-6">
            <li>
              <Link
                target="_blank"
                href={"https://www.instagram.com/harmonygroupng/"}
              >
                <AiFillInstagram size={25} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={
                  "https://www.tiktok.com/@harmonygroupng?_t=8sZ264F9ED0&_r=1"
                }
              >
                <AiFillTikTok size={25} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://www.youtube.com/@HarmonyGroup"}
              >
                <AiFillYoutube size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-base sm:text-xl font-bold">
            For enquiries, please fill out the form below and a member of our
            team will contact you.
          </h4>
          <form action="#" className="space-y-4 mt-12">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full bg-gray-100 rounded-lg border-gray-200 p-3 text-sm outline-none"
                placeholder="Full Name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-gray-100 rounded-lg border-gray-200 p-3 text-sm outline-none"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full bg-gray-100 rounded-lg border-gray-200 p-3 text-sm outline-none"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full bg-gray-100 rounded-lg border-gray-200 p-3 text-sm outline-none"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="accent-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-500 text-xs">
                I hereby consent to the processing of my personal data which I
                have provided in line with the provision of the Nigerian Data
                Protection Regulation 2019 and declare my agreement with Harmony
                Group's Data Privacy and Protection Policy
              </span>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 w-full rounded-lg px-5 py-3 text-orange-600 text-sm font-semibold sm:w-auto"
              >
                Send Enquiry
                <MdArrowOutward size={17} className="mt-0.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
