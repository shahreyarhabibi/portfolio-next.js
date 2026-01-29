/**
 * ContactButton Component (Server)
 * Pure presentational - no hooks needed
 */

export default function ContactButton({ children, width, ...props }) {
  return (
    <a
      {...props}
      href="mailto:shahreyarhabibi@gmail.com"
      className={`inline-flex items-center gap-2 px-6 py-3 border-2 
            border-(--primary) text-(--primary) rounded-full font-medium
            transition-all duration-300 hover:bg-(--primary) hover:text-white`}
    >
      {children}
    </a>
  );
}
