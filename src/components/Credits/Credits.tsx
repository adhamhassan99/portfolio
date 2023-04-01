import React from "react";

type Props = {};

const Credits = (props: Props) => {
  return (
    <div className="flex flex-col items-center pb-3">
      <div className="flex gap-3 text-sm">
        <a
          className="hover:text-Green text-LightestSlate"
          href="https://github.com/bchiang7"
          target="_blank"
        >
          Designed by Brittany Chiang
        </a>
        <p className="text-LightestSlate">.</p>
        <a
          href="https://github.com/adhamhassan99/portfolio"
          target="_blank"
          className="hover:text-Green text-LightestSlate"
        >
          Built by Me
        </a>
      </div>
    </div>
  );
};

export default Credits;
