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

function App() {
  const handleScroll = (event: any) => {
    console.log(event);
  };
  AOS.init();
  return (
    <>
      <div
        onScrollCapture={(event) => console.log(event)}
        className="App bg-Navy w-full "
      >
        <FixedSocials />
        <NavBar />
        <Section id="hero" className="">
          <Hero />
        </Section>
        <Section className="" id="about">
          <AboutMe />
        </Section>
        <Section className="" id="experience">
          <WorkedPlacesSelector />
        </Section>
        <Section id="work">c</Section>
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
