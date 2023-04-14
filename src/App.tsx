import React from "react";
import { AboutMe, Hero, NavBar, Section } from "./components";
import WorkedPlacesSelector from "./components/WorkedPlacesSelector/WorkedPlacesSelector";
import ContactMe from "./components/ContactMe/ContactMe";
import Credits from "./components/Credits/Credits";
import FixedSocials from "./components/FixedSocials/FixedSocials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FBapp from "../firebase";
import { getAnalytics } from "firebase/analytics";
import ProjectItems from "./components/ProjectItem/ProjectItems";

function App() {
  const handleScroll = (event: any) => {
    console.log(event);
  };

  const analytics = getAnalytics(FBapp);

  AOS.init();
  return (
    <>
      <div className="App bg-Navy w-full">
        <FixedSocials />
        <NavBar />
        <Section id="hero" className="mb-56 sm:mb-32 md:mb-0 items-center">
          <Hero />
        </Section>
        <Section className="items-center mb-56 sm:mb-36 md:mb-0" id="about">
          <AboutMe />
        </Section>
        <Section className="items-center" id="experience">
          <WorkedPlacesSelector />
        </Section>
        <Section id="work" className="items-center">
          <ProjectItems />
        </Section>
        <Section className="pt-0 pb-0 mb-0 h-[80vh] md:h-[90vh]" id="contact">
          <ContactMe />
        </Section>
        <Credits />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
}

export default App;
