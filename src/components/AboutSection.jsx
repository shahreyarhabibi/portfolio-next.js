import SectionTitles from "./SectionsTitle";
import DynamicTitle from "./DynamicTitle";
import globeImage from "../assets/images/globe.webp";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function AboutSection() {
  const { isLight } = useContext(ThemeContext);
  return (
    <section
      id="about"
      className="    flex flex-col md:mt-10 md:w-290 m-auto items-center gap-10 md:gap-20 grow pt-20 pb-20"
    >
      <div className="md:w-200 md:mr-92">
        <SectionTitles
          title="About Me"
          underlinewidth="5%"
          bg="bg-(--primary-400)"
        />
        <p className="text-lg">
          With experience building responsive and engaging user interfaces, I
          specialize in front-end development. My work focuses on creating
          scalable solutions that balance performance, maintainability, and a
          polished user experience.
        </p>
        <br className="md:hidden" />
        <p className="text-lg">
          Currently at{" "}
          <a href="https://firstrate.com" className="font-bold text-(--text)">
            FirstRate
          </a>
          , I tackle complex challenges that require thoughtful architecture and
          clear communication. I enjoy coding, coffee, and collaborating closely
          with teams to deliver seamless digital experiences.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          className={`absolute md:-mt-20 md:w-150 -z-50 ${
            isLight ? "opacity-25" : "opacity-40"
          }`}
          src={globeImage}
          alt="globe image"
        />
      </div>
      <DynamicTitle />
    </section>
  );
}
