import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import dp from "../../assets/dp.jpeg";
import BlueText from "../BlueText/BlueText";

type Props = {};

const skills = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Next JS",
  "Python",
  "Django",
];

export default function AboutMe({}: Props) {
  return (
    <div data-aos="fade" className="mt-2">
      <div className="flex-col flex h-full max-w-4xl">
        <SectionHeader number={1} title="About Me" />
        <div className="flex justify-between mt-14 flex-1 gap-6 flex-wrap">
          <div className="flex flex-col text-Slate md:w-3/4 gap-5 max-w-lg mx-auto">
            <div data-aos="fade" className="">
              Hello! My name is Adham Hassan and my passion is creating software
              for both web and mobile. My interest in development started in
              2021 when I had to learn and create a backend using Django. Since
              then I have been hooked and started expanding my skillset
              everyday.
            </div>
            <div data-aos="fade">
              Fast-forward to today, I had the chance to get employed right
              after my graduation by 1 month in a{" "}
              <a
                href="https://www.ejada.com/"
                target="_blank"
                className="text-Green before:w-0 after:w-0 hover:after:w-64 hover:after:duration-500 hover:after:h-[2px] hover:after:bg-Green after:absolute after:bottom-[1.3rem] after:left-[12.4rem] hover:text-Green"
              >
                Saudi Arabian based tech company
              </a>{" "}
              in Cairo/Egypt.
            </div>
            <div data-aos="fade" className="">
              I am currently working in team of 6 talented developers on a{" "}
              <BlueText text="React Native" link="https://reactnative.dev/" />{" "}
              application for <BlueText text="Android" /> and{" "}
              <BlueText text="iOS" /> .
            </div>
            <div data-aos="fade" className="">
              Here are some technologies I have been working with recently:
            </div>
            <div data-aos="fade" className="grid gap-4  grid-cols-2">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="group flex items-center hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="group-hover:border-Green group-hover:cursor-pointer border-l-2 rounded-full w-3 h-3" />
                    <BlueText
                      className={
                        "group-hover:text-Green  group-hover:cursor-pointer"
                      }
                      text={skill}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative z-10 group h-fit  w-1/3 mx-auto">
            <div className="">
              <div className="absolute bg-Green w-full h-full rounded-md opacity-60 hover:bg-transparent transition duration-300"></div>
              <img className="rounded-md" src={dp} />
            </div>
            <div className="h-full w-full absolute border-2 rounded-md border-Green -z-50 left-5 top-5 group-hover:top-3 group-hover:left-3 ease-in-out duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
