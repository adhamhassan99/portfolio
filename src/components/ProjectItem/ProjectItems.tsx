import React from "react";
import { projects } from "../../constants";

type Props = {};

const ProjectItems = (props: Props) => {
  return (
    <div className="w-full  xl:px-32 space-y-36 flex flex-col items-center">
      {projects.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row even:flex-row-reverse w-3/4 odd:text-right group"
          >
            <div className=" max-w-lg">
              <div className="relative group-odd:left-12  z-0">
                <div className=" rounded-xl bg-Green absolute w-full h-full opacity-60 hover:bg-transparent transition"></div>
                <img className="rounded-xl" src={item.previewImg} alt="" />
              </div>
            </div>

            <div className="flex  flex-col  w-full z-50">
              <h1
                className="
              text-2xl 
              font-semibold
              hover:text-Green
              hover:cursor-pointer
              transition
              text-LightestSlate
              "
              >
                {item.projectName}
              </h1>
              <div className="bg-LightNavy text-LightestSlate px-6 py-4">
                {item.projectDescription}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItems;
