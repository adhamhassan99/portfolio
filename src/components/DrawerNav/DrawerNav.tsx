import React, { useEffect, useState } from "react";
import TopNavLink from "../TopNavLink/TopNavLink";

type Props = {};

const DrawerNav = (props: Props) => {
  const [active, setActive] = useState(false);
  const root = document.getElementById("root");
  useEffect(() => {
    !active ? (root.style.overflowY = "clip") : (root.style.overflowY = "");
  }, [active]);

  return (
    <div className={`sm:hidden  flex flex-col z-50`}>
      <div onClick={() => setActive(!active)} className="">
        icon
        {active ? "active" : "not"}
      </div>

      <div
        className={`fixed bg-LightNavy h-screen transition-transform ${
          active ? "translate-x-full" : ""
        }  duration-500 w-2/3 h-screen top-0 bottom-0 right-0`}
      >
        <div
          onClick={() => setActive(!active)}
          className="text-white w-fit  ml-auto mr-8 mt-7"
        >
          Close
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-14">
          <TopNavLink drawer number={1} title="About" navTo="#about" />
          <TopNavLink
            drawer
            number={2}
            title="Experience"
            navTo="#experience"
          />
          <TopNavLink drawer disabled number={3} title="Work" navTo="#work" />
          <TopNavLink drawer number={4} title="Contact" navTo="#contact" />
        </div>
      </div>
    </div>
  );
};

export default DrawerNav;
