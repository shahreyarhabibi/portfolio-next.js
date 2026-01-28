import EducationSections from "./EducationSections";

export default function Education() {
  return (
    <>
      {/*Each Section*/}
      <EducationSections
        title="Kabul University"
        year="2023 - 2025"
        description="BSc in Software Engineering"
        dotcolor="bg-(--color)"
      />
      <EducationSections
        title="Afghan Institute of Technology"
        year="2020 - 2022"
        description="Diploma in Information Systems "
        dotcolor="bg-(--color)"
        hidden="hidden"
      />
      <EducationSections
        title="Hope Worldwide Afghanistan"
        year="2013 - 2014"
        description="DEL (Diploma in English Language)"
        dotcolor="bg-(--color)"
        hidden="hidden"
      />
    </>
  );
}
