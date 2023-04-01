import React from "react";
import { AboutMe, Hero, NavBar, Section } from "./components";
import WorkedPlacesSelector from "./components/WorkedPlacesSelector/WorkedPlacesSelector";

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
      <Section className="">
        <Hero />
      </Section>
      <Section className="" id="about">
        <AboutMe />
      </Section>
      <Section className="" id="experience">
        <WorkedPlacesSelector />
      </Section>
      <Section id="work">c</Section>
      <Section id="contact">c</Section>
    </div>
  );
}

export default App;
