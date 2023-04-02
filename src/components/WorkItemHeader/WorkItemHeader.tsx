import React from "react";

type Props = {
  position: string;
  company: string;
  date: string;
  companyUrl?: string;
  type?: string;
};

const WorkItemHeader = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex text-xl">
        <p className="text-LightestSlate font-bold mr-2">{props.position}</p>
        <p className="text-Green mr-2">@</p>
        <a
          href={props.companyUrl}
          className="text-Green hover:text-Green hover:border-b hover:border-Green hover:cursor-pointer"
        >
          {props.company}
        </a>
      </div>
      <div className="flex">
        <div className=" text-LightSlate mt-2">{props.date}</div>
        <div className=" text-LightSlate mt-2 ml-5">
          {" "}
          {props.type ?? "Full-Time"}
        </div>
      </div>
    </div>
  );
};

export default WorkItemHeader;
