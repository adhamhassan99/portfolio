import React from "react";
import { AboutMe, Hero, NavBar, Section } from "./components";

function App() {
  return (
    <div className="App bg-Navy w-full">
      <NavBar />
      <Section className="flex justify-center">
        <Hero />
      </Section>
      <Section className="p-16" id="about">
        <AboutMe />
      </Section>
      <Section id="experience">b</Section>
      <Section id="work">c</Section>
      <Section id="contact">c</Section>
    </div>
  );
}

export default App;
