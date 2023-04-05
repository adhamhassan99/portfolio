import React, { UIEventHandler } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import { Avatar } from "@mui/material";
import dp from "../../assets/dp.jpeg";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="py-5 px-8 flex justify-between sticky top-0 bg-Navy w-full z-50 ">
      <a data-aos="fade-down" href="#hero">
        <img src={dp} className="w-14 h-14 rounded-full" />
      </a>
      <div className=" gap-8 items-center hidden  sm:flex">
        <TopNavLink delay="1000" number={1} title="About" navTo="#about" />
        <TopNavLink
          delay="1250"
          number={2}
          title="Experience"
          navTo="#experience"
        />
        <TopNavLink
          delay="1500"
          disabled
          number={3}
          title="Work"
          navTo="#work"
        />
        <TopNavLink delay="1750" number={4} title="Contact" navTo="#contact" />
        <a
          data-aos="fade-down"
          data-aos-duration="2000"
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
