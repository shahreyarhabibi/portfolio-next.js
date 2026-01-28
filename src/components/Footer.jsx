import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex m-auto md:flex-row flex-col items-center gap-5 md:mb-2 mb-30 justify-between md:w-290 h-10">
      <div>
        <p>
          © 2026 | <span className="text-(--text)">Ali Reza Habibi</span> | All
          Rights Reserved
        </p>
      </div>
      <div className="flex gap-5">
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
  );
}
