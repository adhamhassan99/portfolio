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
      className={`h-screen box-border px-16 flex justify-center py-24 ${className}`}
    >
      {children}
    </div>
  );
}
