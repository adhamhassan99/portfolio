import React from "react";

type Props = {
  number: number;
  title: string;
};

const SectionHeader = (props: Props) => {
  return (
    <div data-aos="fade" className="flex gap-3 items-center">
      <p className="text-Green text-xl font-semibold">
        {props.number < 10 ? `0${props.number}` : props.number}.
      </p>
      <div className="text-xl md:text-3xl font-bold text-LightestSlate">
        {props.title}
      </div>
      <div className="h-2  border-LightestNavy border-b w-1/4"></div>
    </div>
  );
};

export default SectionHeader;
