import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col md:w-290 m-auto text-center mt-20 md:mt-20 items-center md:gap-10 gap-10 min-h-140 max-h-130 md:min-h-100"
    >
      {/*Title*/}
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-7xl text-(--text)">
          Let's Keep in{" "}
          <span className="font-bold text-7xl text-(--primary)">Touch</span>
        </h1>
        <p className="md:w-2/3 m-auto text-xl ">
          Whether you want to start a project, ask a question, or just say hi —
          I’m just a message away.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-5 md:gap-10 items-center">
        <ContactButton width="w-50"> Let's Connect </ContactButton>
        <a
          href="/portfolio/resume.pdf"
          download
          className="text-center px-4 w-50 py-2 md:w-50 border border-(--text) rounded-full md:py-2 text-(--text) font-semibold transition-all hover:bg-(--text) hover:text-(--background) "
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
