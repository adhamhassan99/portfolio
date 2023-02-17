import React from "react";

type Props = {
  number: number;
  title: string;
  navTo: string;
};

export default function TopNavLink({ number, navTo, title }: Props) {
  return (
    <div className="text-sm">
      <a
        className="transition-all duration-300 text-LightestSlate hover:text-Green"
        href={navTo}
      >
        <div className="inline-block mr-2 text-Green">{`0${number}`}.</div>
        {title}
      </a>
    </div>
  );
}
