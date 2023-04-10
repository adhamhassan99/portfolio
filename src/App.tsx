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
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  const handleScroll = (event: any) => {
    console.log(event);
  };

  AOS.init();
  return (
    <>
      <div className="App bg-Navy w-full">
        <FixedSocials />
        <NavBar />
        <Section id="hero" className="mb-56 sm:mb-32 md:mb-0">
          <Hero />
        </Section>
        <Section className="items-center mb-56 sm:mb-36 md:mb-0" id="about">
          <AboutMe />
        </Section>
        <Section className="items-center" id="experience">
          <WorkedPlacesSelector />
        </Section>
        {/* <Section id="work" className="items-center">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_z215qtts.json"
            className="player"
            loop
            autoplay
            style={{ height: "500px", width: "500px" }}
          />
        </Section> */}
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
