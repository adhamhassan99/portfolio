import React from "react";
import { projects } from "../../constants";
import GridItem from "../GridItem/GridItem";
import SectionHeader from "../SectionHeader/SectionHeader";

type Props = {};

const ProjectItems = (props: Props) => {
  return (
    <div className="w-full xl:px-32  flex flex-col items-center">
      <div className="text-LightestSlate text-4xl font-medium mb-12">
        My Projects
      </div>
      {/* {projects.map((item, index) => {
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

            <div className="flex  flex-col  w-full z-50 space-y-8">
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
              <div className="bg-LightNavy text-LightestSlate px-6 py-4 ">
                {item.projectDescription}
              </div>
            </div>
          </div>
        );
      })} */}
      <div className="mt-0 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.sort().map((item, index) => (
          <GridItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItems;
