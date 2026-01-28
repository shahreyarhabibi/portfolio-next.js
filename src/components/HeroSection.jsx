import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import ContactButton from "./ContactButton";
import heroSectionImg from "../assets/images/ali-reza-habibi.webp";

export default function HeroSection() {
  const { isLight } = useContext(ThemeContext);

  return (
    <section
      id="#"
      className="flex-col md:w-290 m-auto flex justify-between md:flex-row md:mt-20 mt-10 items-center md:gap-20 gap-10"
    >
      <div className="flex items-start flex-col md:w-1/2 gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl self-start">👋 Hello. I'm</p>
          <h1 className="text-7xl self-start font-bold text-(--text)">
            Ali Reza Habibi
          </h1>
        </div>
        <p className="text-xl font-normal md:w-5/6">
          <span className="hero-section-span">Software Engineer </span>
          specialized in <span className="hero-section-span">Frontend </span>
          with <span className="hero-section-span">5+ years</span> of shaping
          digital experiences across web, mobile & desktop.
        </p>
        <ContactButton>Contact Me</ContactButton>
      </div>

      <div className="w-7/8 md:w-1/3 flex flex-col items-center justify-center relative">
        <div
          className={`absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none bottom-[40%] left-[50%] md:left-auto md:right-[5%] md:bottom-auto md:top-[-10%] w-[200px] h-[200px] bg-red-500 ${
            isLight ? "opacity-30" : "opacity-15"
          }`}
        ></div>
        <img
          className="rounded-3xl md:w-4/6 -z-1"
          src={heroSectionImg}
          alt="Ali Reza Habibi Portrait"
        />
        <div
          className={`absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none left-[-30%] bottom-[5%] md:left-auto md:right-[40%] md:bottom-auto md:top-[45%] w-[200px] h-[200px] bg-purple-500 ${
            isLight ? "opacity-30" : "opacity-15"
          }`}
        ></div>
        <div className="flex gap-5 mt-5">
          <a
            aria-label="Send me an Email"
            href="mailto:shahreyarhabibi@gmail.com"
          >
            <FaRegEnvelope className="text-(--text) text-xl" />
          </a>
          <a
            aria-label="Visit my LinkedIn Profile"
            href="https://linkedin.com/in/ali-reza-habibi"
          >
            <FaLinkedinIn className="text-(--text) text-xl" />
          </a>
          <a
            aria-label="Visit my GitHub Profile"
            href="https://github.com/shahreyarhabibi"
          >
            <BsGithub className="text-(--text) text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
