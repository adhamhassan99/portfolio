import React from "react";

type Props = {
  text: string;
  link?: string;
  className?: string;
};

const BlueText = ({ text, link, className = "" }: Props) => {
  return (
    <div className={`text-Green inline-block ${className}`}>
      {link ? (
        <a className="text-inherit" target="_blank" href={link}>
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default BlueText;
