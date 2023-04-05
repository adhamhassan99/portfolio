import React from "react";

type Props = {
  number: number;
  title: string;
  navTo: string;
  disabled?: boolean;
  delay?: string;
};

export default function TopNavLink({
  number,
  navTo,
  title,
  disabled,
  delay = "1000",
}: Props) {
  return (
    <div data-aos="fade-down" data-aos-duration={delay} className="text-sm">
      <a
        className={`hover:cursor-pointer transition-all duration-300 text-LightestSlate hover:text-Green ${
          disabled ? "opacity-20" : ""
        }`}
        href={disabled ? "" : navTo}
      >
        <div className="inline-block mr-2 text-Green">{`0${number}`}.</div>
        {title}
      </a>
    </div>
  );
}
