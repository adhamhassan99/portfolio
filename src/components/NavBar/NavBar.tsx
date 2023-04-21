import React, { useEffect, useState } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import dp from "../../assets/dp.jpeg";
import DrawerNav from "../DrawerNav/DrawerNav";
import { useMouseWheel } from "react-use";

type Props = {};

export default function NavBar({}: Props) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [bgSemi, setBgSemi] = useState(true);
  const [offset, setOffset] = useState(useMouseWheel());
  const mouseWheel = useMouseWheel();

  useEffect(() => {
    setScrolledDown(mouseWheel - offset > 0);
    setOffset(mouseWheel);
    setBgSemi(mouseWheel === 0);
  }, [mouseWheel]);

  return (
    <div
      className={`transition-all duration-700 -translate-y-${
        scrolledDown ? "24" : "0"
      } py-3 px-8 flex justify-between sticky top-0 bg-${
        !bgSemi ? "transparent" : "Navy"
      } w-full z-50  before:bg-Navy before:absolute before:h-full before:w-screen before:opacity-95 before:drop-shadow-md  before:right-0 before:top-0`}
    >
      <a data-aos="fade-down" data-aos-once="true" href="">
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
        <TopNavLink delay="1500" number={3} title="Work" navTo="#work" />
        <TopNavLink delay="1750" number={4} title="Contact" navTo="#contact" />
        <a
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-once="true"
          href="../src/assets/Resume.pdf"
          target="_blank"
          className="transition-colors duration-300 text-Green text-sm border-Green border-2 h-fit px-3 py-2 rounded-md  hover:bg-greenTint hover:text-Green"
        >
          Resume
        </a>
      </div>
      <DrawerNav />
    </div>
  );
}
