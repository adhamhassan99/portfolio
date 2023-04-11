import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import WorkItem from "../WorkItem/WorkItem";

type Props = {};

const workExperience = [
  {
    company: "Ejada Systems Ltd.",
    companySite: "https://www.ejada.com",
    position: "Software Engineer",
    date: "August 2022 - Present",
    description: [
      "Implemented multiple user flows to fulfill business needs.",
      "Enhanced performance by eliminating duplicate query call due to unnecessary side effects resulting in 10% decrease in bandwidth usage.",
      "Fixed bugs and helped other team members fix bugs.",
      "Integrated and Implemented Firebase Cloud Messaging for notifications support.",
      "Implemented Firebase Cloud Messaging for notifications support",
      "Built core functionalities while integrating with business REST API",
      "Integrated Mobile App with existing Web App and Backend.",
      "Communicated with team members to share ideas and seek experience from seniors",
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
