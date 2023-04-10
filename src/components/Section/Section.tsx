import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id = "" }: Props) {
  return (
    <div
      id={id}
      className={`px-7 min-h-screen box-border md:px-16 flex justify-center md:py-24 ${className}`}
    >
      {children}
    </div>
  );
}
