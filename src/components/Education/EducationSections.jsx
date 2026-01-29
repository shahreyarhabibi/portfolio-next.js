/**
 * EducationSections Component (Server)
 * Single education entry with timeline dot
 */

export default function EducationSections({
  title,
  year,
  description,
  dotcolor,
  hidden,
}) {
  return (
    <div className="flex flex-col w-full relative">
      {/* Timeline dot and line */}
      <span
        className={`${hidden} absolute -ml-1 top-2 w-3 h-3 rounded-full ${dotcolor} 
          after:h-52 md:after:h-44 after:w-0.5 after:bg-(--color) 
          after:absolute after:rounded-full after:left-[4.4px] after:-z-10 after:opacity-50`}
      />
      <span
        className={`absolute -ml-1 top-2 w-3 h-3 rounded-full ${dotcolor}`}
      />

      {/* Content */}
      <div className="flex ml-5 md:ml-8 flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-bold text-(--text)">{title}</h2>
          <p className="md:mr-20 whitespace-nowrap">{year}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
