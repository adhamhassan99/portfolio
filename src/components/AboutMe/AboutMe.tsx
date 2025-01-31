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
  "Next.js",
  "Expo",
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
              Building solutions in the Banking, Governmental, Medical and other
              fields, I have always been passionate about building software that
              solves real-world problems.
            </div>
            <div data-aos="fade">
              Currently working as a Frontend Engineer in the{" "}
              <span className="bg-gradient-to-r from-[#AD1B02] to-[#E88D14] bg-clip-text text-transparent hover:text-transparent">
                Applied AI
              </span>{" "}
              team at{" "}
              <a
                className="bg-gradient-to-r from-[#AD1B02] to-[#E88D14] bg-clip-text text-transparent hover:text-transparent"
                href="https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html"
                target="_blank"
              >
                PwC ETIC
              </a>
              , I have been working on solutions that use the power of GenAI and
              Machine Learning to solve real-world problems.
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
