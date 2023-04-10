import React, { useState, useRef } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";
import { ReactComponent as BurgerMenu } from "../../assets/burgerMenu.svg";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useClickAway } from "react-use";

type Props = {};

const DrawerNav = (props: Props) => {
  const [active, setActive] = useState(false);
  const root = document.getElementById("root");

  const ref = useRef(null);
  useClickAway(ref, () => {
    setActive(false);
  });

  return (
    <div ref={ref} id="drawer" className={` sm:hidden  flex flex-col z-50`}>
      <div onClick={() => setActive(!active)} className="">
        <BurgerMenu />
      </div>

      <div
        className={`fixed bg-LightNavy h-screen transition-transform ${
          !active ? "translate-x-full" : ""
        }  duration-500 w-2/3 h-screen top-0 bottom-0 right-0`}
      >
        <div
          onClick={() => setActive(!active)}
          className="text-white w-fit  ml-auto mr-8 mt-7"
        >
          <Close />
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-14">
          <TopNavLink
            onNav={() => setActive(!active)}
            drawer
            number={1}
            title="About"
            navTo="#about"
          />
          <TopNavLink
            onNav={() => setActive(!active)}
            drawer
            number={2}
            title="Experience"
            navTo="#experience"
          />
          <TopNavLink
            onNav={() => setActive(!active)}
            drawer
            disabled
            number={3}
            title="Work"
            navTo="#work"
          />
          <TopNavLink
            onNav={() => setActive(!active)}
            drawer
            number={4}
            title="Contact"
            navTo="#contact"
          />
          <a
            target="_blank"
            href="../src/assets/Resume.pdf"
            className="mt-10 text-Green hover:text-Green border-Green border px-7 py-4 rounded-md hover:bg-greenTint transition duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
