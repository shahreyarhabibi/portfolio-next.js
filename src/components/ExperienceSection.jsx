import Experience from "./Experience/Experience";
import SectionTitles from "./SectionsTitle";
import Education from "./Education/Education";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center  pt-20 pb-20 md:w-290 m-auto grow "
    >
      <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full ">
        {/* Experience Section */}
        <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-5">
          <SectionTitles bg="bg-(--tertiary)" title="Experience" />
          <Experience />
        </div>

        {/* Education Section */}
        <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-5 md:relative md:left-10">
          <SectionTitles bg="bg-(--secondary)" title="Education" />
          <Education />
        </div>
      </div>
      <a
        href="/portfolio/resume.pdf"
        download
        className="flex items-center justify-center text-center w-70 py-5 mt-10  md:mt-20 md:w-60 border border-(--text) rounded-full md:py-2 text-(--text) font-semibold transition-all hover:bg-(--text) hover:text-(--background) "
      >
        Download Resume (CV)
      </a>
    </section>
  );
}
