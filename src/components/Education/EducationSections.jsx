export default function EducationSections({
  title,
  year,
  description,
  dotcolor,
  hidden,
}) {
  return (
    <div className="flex flex-col w-full relative">
      {/* for adding the dot and line*/}
      <span
        className={`${hidden} absolute -ml-1 top-2 w-3 h-3 rounded-full ${dotcolor} after:h-52 md:after:h-44 after:w-0.5 after:bg-(--color) after:absolute after:rounded-full after:left-[4.4px] after:-z-10 after:opacity-50`}
      ></span>
      <span
        className={`absolute -ml-1 top-2 w-3 h-3 rounded-full ${dotcolor} `}
      ></span>
      {/* Experience Content */}
      <div className="flex ml-5 md:ml-8 flex-col gap-3">
        {/*Title Line*/}
        <div className="flex flex-row  justify-between items-center">
          <h2 className="text-xl font-bold text-(--text)">{title}</h2>
          <div></div>
          <p className="md:mr-20 whitespace-nowrap">{year}</p>
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
