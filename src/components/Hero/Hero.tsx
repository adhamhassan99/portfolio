import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="mt-7 space-y-8">
      <p className="text-Green text-lg">Hello, my name is</p>
      <div className="space-y-2">
        <div className="font-bold text-LightestSlate  text-3xl sm:text-6xl md:text-7xl">
          Adham Hassan.
        </div>
        <div className="text-LightSlate font-bold text-3xl sm:text-6xl md:text-7xl">
          I build Web and Mobile Apps.
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="max-w-xl text-LightestSlate  text-lg sm:text-xl ">
          I am a software engineer specializing in frontend development, with a
          passion for creating intuitive and visually engaging user interfaces.
          My expertise lies in building scalable, high-performance web
          applications that deliver seamless user experiences. I thrive on
          crafting clean, efficient code to turn ideas into impactful digital
          products. Currently, I am working as a Frontend Engineer at{" "}
          {/* 
          before:w-0 after:w-0 hover:after:w-40 hover:after:duration-500 hover:after:h-[2px] hover:after:bg-Green after:absolute after:bottom-[24.5rem] after:left-[40rem]
          
          */}
          <a
            className="bg-gradient-to-r from-[#AD1B02] to-[#E88D14] bg-clip-text text-transparent hover:text-transparent"
            href="https://www.pwc.com/m1/en/careers/egypt-technology-innovation-centre.html"
            target="_blank"
          >
            PwC ETIC
          </a>
          .
        </div>
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
          className="player"
          loop
          autoplay
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    </div>
  );
}
