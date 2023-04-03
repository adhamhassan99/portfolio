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
        <div className="max-w-xl text-LightestSlate  text-lg sm:text-xl">
          I'm a software engineer specializing in building outstanding digital
          experiences. Currently, I'm building scalable, highly available
          products at{" "}
          <a
            className="text-Green"
            href="https://www.ejada.com/"
            target="_blank"
          >
            Ejada Systems Ltd
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
