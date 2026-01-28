export default function ContactButton({ children, width, ...props }) {
  return (
    <a
      {...props}
      href="mailto:shahreyarhabibi@gmail.com"
      className={`md:self-start ${width} inline-flex justify-center items-center border-2 text-(--primary) border-(--primary) rounded-full px-4 py-2 transition-all duration-300 hover:bg-(--primary) hover:text-(--background)`}
    >
      {children}
    </a>
  );
}
