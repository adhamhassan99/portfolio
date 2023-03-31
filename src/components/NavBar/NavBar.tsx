import React from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import { Avatar } from "@mui/material";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="py-5 px-8 flex justify-between">
      <Avatar sx={{ width: 50, height: 50 }} src="../src/assets/dp.jpeg" />
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
