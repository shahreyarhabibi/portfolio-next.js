/**
 * Footer Component (Server)
 * Static content with social links
 */

import { FaRegEnvelope, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex m-auto md:flex-row flex-col items-center gap-5 md:mb-5 mb-30 justify-between md:w-350 h-10">
      <p>
        © {new Date().getFullYear()} |{" "}
        <span className="text-(--text)">Ali Reza Habibi</span> | All Rights
        Reserved
      </p>

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
    </footer>
  );
}
