import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="px-16 mt-44 space-y-8">
      <p className="text-Green text-lg">Hello, my name is</p>
      <div className="">
        <div className="text-LightestSlate font-medium  text-3xl sm:text-6xl md:text-6xl">
          Adham Hassan.
        </div>
        <div className="text-LightSlate font-medium text-3xl sm:text-6xl md:text-6xl">
          I build Web and Mobile Apps.
        </div>
      </div>
      <div className="max-w-xl text-LightestSlate  text-lg sm:text-xl">
        I'm a software engineer specializing in building outstanding digital
        experiences. Currently, I'm building scalable, highly available products
        at{" "}
        <a className="text-Green" href="https://www.ejada.com/" target="_blank">
          Ejada
        </a>
        .
      </div>
    </div>
  );
}
