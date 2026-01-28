import { BsWordpress } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiNestjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function TechnologiesIcons() {
  const style =
    "text-2xl text-zinc-500 hover:text-(--text) transition-all hover:scale-120";
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center ">
      <TbBrandNextjs className={style} title="NextJS" />
      <FaReact className={style} title="React" />
      <FaPython className={style} title="Python" />
      <SiTailwindcss className={style} title="Tailwind" />
      <FaCss3Alt className={style} title="CSS" />
      <AiFillHtml5 className={style} title="HTML5" />
      <SiFlutter className={style} title="Flutter" />
      <SiTypescript className={style} title="TypeScript" />
      <FaNodeJs className={style} title="NodeJs" />
      <SiPostman className={style} title="Postman" />
      <IoLogoJavascript className={style} title="JavaScript" />
      <BsWordpress className={style} title="WordPress" />
      <SiNestjs className={style} title="NestJs" />
      <BsGithub className={style} title="Github" />
      <BsGit className={style} title="Git" />
      <BiDotsHorizontalRounded className={style} title="And Many More" />
    </div>
  );
}
