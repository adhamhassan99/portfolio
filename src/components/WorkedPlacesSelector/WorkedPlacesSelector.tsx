import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import WorkItem from "../WorkItem/WorkItem";

type Props = {};

const workExperience = [
  {
    company: "Mental Health",
    companySite: "https://www.ejada.com",
    position: "Software Engineer",
    date: "September 2020 - Present",
    description: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Write modern, performant, maintainable code for a",
    ],
  },
  {
    company: "Mental Healthaa",
    companySite: "https://www.ejada.com",
    position: "Software Engineer",
    date: "September 2020 - Present",
    description: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Write modern, performant, maintainable code for a",
    ],
  },
];

const WorkedPlacesSelector = (props: Props) => {
  const [selected, setSelected] = useState(0);
  const handleSelection = (i: number) => {
    setSelected(i);
  };
  return (
    <div className="py-24 md:px-16">
      <SectionHeader title="Where I've Worked" number={2} />
      <div className="flex flex-col  md:flex md:flex-row mt-7 gap-7">
        <div className="flex max-h-80 overflow-y-auto overflow-x-scroll w-[80vw] md:w-fit md:overflow-x-auto md:flex-col flex-row">
          {workExperience.map((value, i) => {
            return (
              <div
                onClick={() => handleSelection(i)}
                className={`text-start transition duration-500  hover:cursor-pointer hover:text-Green hover:bg-greenTint py-3 pr-10 pl-4  ${
                  selected === i
                    ? "border-Green bg-LightestNavy text-Green border-l-2"
                    : "border-LightestNavy border-l text-Slate"
                }`}
              >
                {value.company}
              </div>
            );
          })}
        </div>
        <WorkItem activeId={selected} workItems={workExperience} />
      </div>
    </div>
  );
};

export default WorkedPlacesSelector;
