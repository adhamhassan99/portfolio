import React from "react";
import { ReactComponent as GithubSVG } from "../../assets/icons8-github-48.svg";
import { ReactComponent as TwitterSVG } from "../../assets/icons8-twitter.svg";
import { ReactComponent as LinkedINSVG } from "../../assets/icons8-linkedin.svg";
import { toast } from "react-toastify";

type Props = {};

const FixedSocials = (props: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("adham.hassan7499@gmail.com");
    toast.success("Email copied to clipboard", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <div className="hidden flex-col space-y-7 xl:flex fixed left-16 top-2/3 items-center h-full">
        <a
          title="GitHub"
          href="https://github.com/adhamhassan99"
          target="_blank"
        >
          <GithubSVG className="fill-Slate hover:fill-Green hover:-translate-y-2 transition duration-200 ease-linear" />
        </a>
        <a
          title="Twitter"
          href="https://twitter.com/adhamhassan99"
          target="_blank"
        >
          <TwitterSVG className="fill-Slate  hover:fill-Green hover:-translate-y-2 transition duration-200 ease-linear" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/adhamhassanabdelwahab/"
          target="_blank"
        >
          <LinkedINSVG className="fill-Slate  hover:fill-Green hover:-translate-y-2 transition duration-200 ease-linear" />
        </a>
        <div className="rounded-md  border-4 bg-Slate w-3 h-56 border-Navy"></div>
      </div>

      <div className="hidden flex-col xl:flex fixed left-[90%]  top-2/3 items-center h-full">
        <a
          onClick={handleCopy}
          // href="mailto:adham.hassan7499@gmail.com"
          className="cursor-vertical-text rotate-90 mt-20 text-Slate hover:text-Green hover:cursor-pointer transition hover:-translate-y-2 duration-300"
        >
          adham.hassan7499@gmai.com
        </a>
        <div className="rounded-md  border-4 bg-Slate w-3 mt-28 h-44 border-Navy"></div>
      </div>
    </>
  );
};

export default FixedSocials;
