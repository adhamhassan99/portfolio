import React from "react";
import { ReactComponent as GithubSVG } from "../../assets/icons8-github-48.svg";
import { ReactComponent as TwitterSVG } from "../../assets/icons8-twitter.svg";
import { ReactComponent as LinkedINSVG } from "../../assets/icons8-linkedin.svg";
type Props = {};

const Credits = (props: Props) => {
  return (
    <div className="flex flex-col items-center pb-6">
      <div className="xl:hidden flex mb-4 items-center gap-24">
        <a
          title="GitHub"
          href="https://github.com/adhamhassan99"
          target="_blank"
        >
          <GithubSVG className="fill-Slate hover:fill-Green " />
        </a>
        <a
          title="Twitter"
          href="https://twitter.com/adhamhassan99"
          target="_blank"
        >
          <TwitterSVG className="fill-Slate hover:fill-Green " />
        </a>

        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/adhamhassanabdelwahab/"
          target="_blank"
        >
          <LinkedINSVG className="fill-Slate hover:fill-Green " />
        </a>
      </div>
      <div className="flex gap-3 text-sm">
        <a
          className="hover:text-Green text-LightestSlate"
          href="https://github.com/bchiang7"
          target="_blank"
        >
          Designed by Brittany Chiang
        </a>
        <p className="text-LightestSlate">.</p>
        <a
          href="https://github.com/adhamhassan99/portfolio"
          target="_blank"
          className="hover:text-Green text-LightestSlate"
        >
          Built by Me
        </a>
      </div>
    </div>
  );
};

export default Credits;
