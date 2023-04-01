import React from "react";
import WorkItemHeader from "../WorkItemHeader/WorkItemHeader";
// {
//     company: "Mental Health",
//     companySite: "https://www.ejada.com",
//     position: "Software Engineer",
//     date: "September 2020 - Present",
//     description: [
//       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
//       "Write modern, performant, maintainable code for a diverse array of client and internal projects",
//       "Write modern, performant, maintainable code for a",
//     ],
//   },

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
    <div className="flex flex-col px-7 py-2">
      <WorkItemHeader
        company={workItems[activeId].company}
        position={workItems[activeId].position}
        date={workItems[activeId].date}
        companyUrl={workItems[activeId].companySite}
      />
    </div>
  );
};

export default WorkItem;
