import { FaWordpressSimple } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import SectionTitles from "../SectionsTitle";
import Service from "./Service";
import { MdCode } from "react-icons/md";
import TechnologiesIcons from "./TechnologiesIcons";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="flex  flex-col md:w-290 m-auto justify-center md:gap-8 gap-5 grow pt-15 pb-20 scroll-mt-10 md:scroll-mt-0"
    >
      <SectionTitles title="What i'm doing" bg="bg-(--primary)" />
      {/*Services Grid*/}
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-10">
        {/* Each Grid */}
        <Service
          title="Web Development"
          description="Creating responsive and high-performing websites that deliver smooth, enjoyable user experiences."
          icon={MdCode}
          iconColor="text-green-500"
        />
        <Service
          title="Mobile Applications"
          description="Building intuitive and reliable mobile apps designed to solve real-world problems."
          icon={AiOutlineMobile}
          iconColor="text-orange-500"
        />
        <Service
          title="Desktop Development"
          description="Developing stable and efficient desktop applications that make workflows seamless."
          icon={MdMonitor}
          iconColor="text-blue-500"
        />
        <Service
          title="WordPress Development"
          description="Developing custom WordPress sites and themes that are both functional and visually appealing."
          icon={FaWordpressSimple}
          iconColor="text-purple-500"
        />
      </div>
      <TechnologiesIcons />
    </section>
  );
}
