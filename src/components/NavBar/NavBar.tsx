import React, { useEffect, useState } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import dp from "../../assets/dp.jpeg";
import DrawerNav from "../DrawerNav/DrawerNav";

type Props = {};

export default function NavBar({}: Props) {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [bgSemi, setBgSemi] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      setBgSemi(window.scrollY === 0);

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrolledDown(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledDown]);

  return (
    <div
      className={`transition-transform duration-500 -translate-y-${
        scrolledDown ? "24" : "0"
      } py-3 px-8 flex justify-between sticky top-0 bg-${
        !bgSemi ? "transparent" : "Navy"
      } w-full z-50  before:bg-Navy before:absolute before:h-full before:w-screen before:opacity-95 before:drop  before:right-0 before:top-0`}
    >
      <a data-aos="fade-down" data-aos-once="true" href="#hero">
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
