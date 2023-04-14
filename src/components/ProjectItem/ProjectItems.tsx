import React from "react";
import { projects } from "../../constants";

type Props = {};

const ProjectItems = (props: Props) => {
  return (
    <div className="w-full bg-pink-200 lg:px-32 xl:px-72">
      {projects.map((item) => {
        return (
          <div className="bg-red-200 h-72">
            <img
              className="odd:h-64 rounded-md max-w-md"
              src={item.previewImg}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItems;
