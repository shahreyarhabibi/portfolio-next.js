import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function SectionTitles({ bg, title }) {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="relative">
      <h2
        className={`font-bold text-(--text) text-3xl after:block after:mb-3 after:content-[' ']  after:w-[30%] md:after:w-[70px] after:mt-3 after:ml-0.5 after:border-b-4 after:border-(--color) after:opacity-50 after:rounded-full`}
      >
        {title}
      </h2>
      <div
        className={`${bg} absolute -z-10 rounded-full blur-3xl animate-pulse-slow pointer-events-none
        md:-mt-35 md:-ml-5 mt-[-32%] ml-[-20%]
        w-[200px] h-[200px]  ${isLight ? "opacity-30" : "opacity-15"}`}
      ></div>
    </div>
  );
}
