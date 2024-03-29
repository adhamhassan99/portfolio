import React from "react";

type Props = {
  number: number;
  title: string;
  navTo: string;
  disabled?: boolean;
  delay?: string;
  drawer?: boolean;
  onNav?: any;
};

export default function TopNavLink({
  number,
  navTo,
  title,
  disabled,
  delay = "1000",
  drawer = false,
  onNav = () => {},
}: Props) {
  return (
    <div
      onClick={onNav}
      data-aos={!drawer && "fade-down"}
      data-aos-once="true"
      data-aos-duration={delay}
      className={`text-${drawer ? "lg" : "sm"}`}
    >
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
