import React from "react";
import { AboutMe, Hero, NavBar, Section } from "./components";
import WorkedPlacesSelector from "./components/WorkedPlacesSelector/WorkedPlacesSelector";
import ContactMe from "./components/ContactMe/ContactMe";
import Credits from "./components/Credits/Credits";

function App() {
  const handleScroll = (event: any) => {
    console.log(event);
  };
  return (
    <div
      onScrollCapture={(event) => console.log(event)}
      className="App bg-Navy w-full "
    >
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
      <Section className="pt-0 pb-0 mb-0 h-[80vh]" id="contact">
        <ContactMe />
      </Section>
      <Credits />
    </div>
  );
}

export default App;
