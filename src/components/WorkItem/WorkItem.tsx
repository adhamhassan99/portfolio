import React from "react";
import WorkItemHeader from "../WorkItemHeader/WorkItemHeader";

interface company {
  company: string;
  companySite: string;
  position: string;
  date: string;
  description: string[];
}

type Props = {
  activeId: number;
  workItems: Array<company>;
};

const WorkItem = ({ activeId, workItems }: Props) => {
  return (
    <div data-aos="fade" className="flex flex-col md:px-7 md:py-2">
      <WorkItemHeader
        company={workItems[activeId].company}
        position={workItems[activeId].position}
        date={workItems[activeId].date}
        companyUrl={workItems[activeId].companySite}
      />
      <ul className="mt-5 space-y-4">
        {workItems[activeId].description.map((item, index) => (
          <li
            data-aos="fade"
            className=" text-LightSlate before:content-['▶'] before:text-Green before:stroke-Green before:text-xs before:mr-4 max-w-lg"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkItem;
