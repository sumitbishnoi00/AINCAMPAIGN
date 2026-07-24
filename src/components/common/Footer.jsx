"use client";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FOOTER_LINKS, MARQUEE_LOGOS } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icons";

const Footer = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    emailjs
      .sendForm("service_77m9x8k", "template_yef5xxp", form.current, {
        publicKey: "wJo3JKkjDqwuvZNbQ",
      })
      .then(() => {
        Swal.fire({
          title: "Subscribed!",
          text: "Thank you for subscribing.",
          icon: "success",
          confirmButtonColor: "#3B5998",
        });
        setEmail("");
        form.current.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor: "#EF4444",
        });

        console.error(error);
      });
  };
  return (

    <section className="px-4 bg-ivory-white lg:pt-[91.03px] md:pt-18 sm:pt-14 pt-10">
      <div className="max-w-[1600px] w-full mx-auto overflow-hidden flex flex-col items-center justify-center">
        <div className="flex w-max marquee">
          <div className="marquee-track">
            {MARQUEE_LOGOS.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-10 shrink-0"
              >
                <a href="#">
                  <Image
                    src={item.src}
                    width={item.imgWidth}
                    height={item.imgHeight}
                    alt="logo"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="marquee-track">
            {MARQUEE_LOGOS.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-10 shrink-0"
              >
                <Image
                  src={item.src}
                  width={item.imgWidth}
                  height={item.imgHeight}
                  alt="logo"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="w-full border border-dashed border-dark-blue lg:mt-15 md:mt-13 sm:mt-10 mt-7 lg:mb-[65.29px] md:mb-12 sm:mb-8  mb-7" ></div>

        <div className="w-full flex lg:flex-row flex-col items-start justify-center">
          <div className="max-w-[242.95px] w-full flex items-center mr-[95.01px]">
            <Image
              src={"/assets/images/webg/logo.webp"}
              width={242.95}
              height={33.89}
              alt="logo"
            />
          </div>

          <div className="max-w-100.25 w-full grid grid-cols-2 2xl:gap-51.75 xlgap-30 gap-10 2xl:mr-53.75 xl:mr-29 mr-10 mt-3 max-lg:mt-10 max-sm:mt-7">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="xl:gap-6.25 gap-4 flex flex-col">
                <h3 className="thicccboi-700 xl:text-[20px] lg:text-[18px]  leading-[115%] text-light-black tracking-[5%] uppercase">
                  {section.title}
                </h3>

                <ul className="text-smoky-gray">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={"/"}
                        className="thicccboi-300 xl:text-[16px] hover:underline duration-300 transition-all hover:text-red-600 text-[14px] leading-[250%]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-111.75 w-full flex flex-col lg:mt-3 mt-5">
            <h1 className="thicccboi-700 xl:text-[20px] lg:text-[18px] leading-[115%] text-light-black tracking-[5%] uppercase xl:mb-5.25 lg:mb-4 mb-3">
              subscribe
            </h1>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter email address"
                className="w-full rounded-[18px] border border-light-lavender bg-white h-16.25 px-5.25 thicccboi-300 text-[16px] leading-[162.5%] placeholder:text-jet-gray outline-none transition-all duration-500"
              />

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button type="submit" className="hidden">
                submit
              </button>
            </form>

            <p className="max-w-110.5 w-full thicccboi-300 text-[14px] leading-[157.14%] text-smoky-gray mt-5">
              By submitting your email you agree to our Terms of Use and Sale
              and Privacy Policy. You will receive email communications from us
              for marketing, informational, and promotional purposes and can
              opt-out at any time.
            </p>
          </div>
        </div>

        <div className="w-full border border-dashed border-dark-blue lg:mt-15.75 md:mt-13 sm:mt-10 mt-7 md:mb-10.25 mb-7"></div>


        <div className="w-full flex sm:flex-row flex-col max-sm:gap-4 items-center justify-between md:mb-13.75 mb-7">
          <ul className="flex items-center justify-center gap-2 thicccboi-300 text-[14px] leading-[157.14%] text-smoky-gray">
            <li>
              <Link
                href={"/privacy-policy"}
                className=" transition-all duration-500 hover:text-black"
              >
                {" "}
                Privacy Policy{" "}
              </Link>
            </li>
            <li>•</li>

            <li>
              <Link
                href={"/terms-and-conditions"}
                className=" transition-all duration-500 hover:text-black"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>

          <div className="flex flex-row  md:gap-5 gap-3">
            <div className="w-12 h-12  hover:scale-110 cursor-pointer duration-500 transition-all">
              <a href="facebook.com" target="_blank">
                 <Icon icon={"facebook"} />
              </a>
            </div>
            <div className="w-12 h-12  hover:scale-110 cursor-pointer duration-500 transition-all">
              <a href="https://www.instagram.com/" target="_blank" >
                <Icon icon={"insta"} />
              </a>
            </div>
            <div className="w-12 h-12  hover:scale-110 cursor-pointer duration-500 transition-all">
              <a href="https://www.linkedin.com/" target="_blank" >
                <Icon icon={"linkin"} />
              </a>
            </div>
            <div className="w-12 h-12  hover:scale-110 cursor-pointer duration-500 transition-all">
              <a href="https://clearbit.com/" target="_blank" >
                <Icon icon={"cb"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
