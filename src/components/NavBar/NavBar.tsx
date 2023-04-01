import React, { UIEventHandler } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import { Avatar } from "@mui/material";
import dp from "../../assets/dp.jpeg";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="py-5 px-8 flex justify-between sticky top-0 bg-Navy w-full z-50 ">
      <img src={dp} className="w-14 h-14 rounded-full" />
      <div className=" gap-8 items-center hidden  sm:flex">
        <TopNavLink number={1} title="About" navTo="#about" />
        <TopNavLink number={2} title="Experience" navTo="#experience" />
        <TopNavLink number={3} title="Work" navTo="#work" />
        <TopNavLink number={4} title="Contact" navTo="#contact" />
        <a
          href="../src/assets/Jan Updated CV.pdf"
          target="_blank"
          className="transition-all duration-300 text-Green text-sm border-Green border-2 h-fit px-3 py-2 rounded-md  hover:bg-greenTint hover:text-Green"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
