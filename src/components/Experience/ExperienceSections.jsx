export default function ExperienceSections({
  title,
  year,
  description,
  dotcolor,
  hidden,
  href,
}) {
  return (
    <div className="flex flex-col w-full relative">
      {/* for adding the dot and line*/}
      <span
        className={`${hidden} absolute -ml-1 top-2 md:top-2 w-3 h-3 rounded-full ${dotcolor} after:h-88 md:after:h-60 after:w-0.5 after:bg-(--color) after:absolute after:rounded-full after:left-[4.8px] after:-z-10 after:opacity-50`}
      ></span>
      <span
        className={`absolute -ml-1 top-2 md:top-2 w-3 h-3 rounded-full ${dotcolor} `}
      ></span>
      {/* Experience Content */}
      <div className="flex ml-5 md:ml-8 flex-col gap-1">
        {/*Title Line*/}
        <div className="flex flex-row justify-between items-center">
          <a
            href={href}
            className="text-[22px] md:text-xl font-bold text-(--text)"
          >
            {title}
          </a>
          <p className="whitespace-nowrap md:mr-20 md:relative md:left-5">
            {year}
          </p>
        </div>
        {/*job description Line*/}
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
