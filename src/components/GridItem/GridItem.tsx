import React from "react";
import { ReactComponent as FolderIcon } from "../../assets/FolderIcon.svg";
import { ReactComponent as LinkIcon } from "../../assets/LinkIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/Github.svg";
import { ReactComponent as AppStore } from "../../assets/apple.svg";
import { ReactComponent as GoogleStore } from "../../assets/google.svg";

type Props = {
  projectName: string;
  projectDescription: string;
  techUsed: string[];
  projectLink?: string;
  githubLink?: string;
  previewImg?: string;
  delay?: number;
  googlePlayLink?: string;
  appStoreLink?: string;
};

function GridItem({
  githubLink,
  previewImg,
  projectDescription,
  projectLink,
  projectName,
  techUsed,
  delay = 50,
  appStoreLink,
  googlePlayLink,
}: Props) {
  return (
    <div
      data-aos="fade"
      data-aos-delay={delay}
      className="bg-LightNavy px-7 py-6 rounded-md flex flex-col group hover:cursor-pointer hover:-translate-y-2 transition duration-300"
    >
      <div className="flex justify-between">
        <FolderIcon className="stroke-Green" />
        <div className="flex gap-5">
          {githubLink && (
            <a target="_blank" href={githubLink}>
              <GithubIcon
                width={20}
                className="stroke-LightestSlate hover:cursor-pointer hover:stroke-Green fill-none"
              />
            </a>
          )}
          {projectLink && (
            <a target="_blank" href={projectLink}>
              <LinkIcon
                width={20}
                className="stroke-LightestSlate hover:cursor-pointer hover:stroke-Green"
              />
            </a>
          )}
          {appStoreLink && (
            <a title="Apple Store app link" target="_blank" href={appStoreLink}>
              <AppStore
                width={30}
                className="stroke-LightestSlate hover:cursor-pointer hover:stroke-Green  h-10"
              />
            </a>
          )}
          {googlePlayLink && (
            <a
              title="Google Play Store app link"
              target="_blank"
              href={googlePlayLink}
            >
              <GoogleStore
                width={20}
                className="stroke-LightestSlate hover:cursor-pointer hover:stroke-Green  h-10"
              />
            </a>
          )}
        </div>
      </div>
      <div className="text-lg mt-8 text-LightestSlate group-hover:text-Green transition font-semibold">
        {projectName}
      </div>
      <div className="text-LightSlate font-medium mt-4 mb-auto">
        {projectDescription}
      </div>
      <div className="flex flex-row flex-wrap gap-3 mt-10">
        {techUsed.map((item, index) => (
          <div key={index} className="text-sm text-LightSlate">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridItem;
