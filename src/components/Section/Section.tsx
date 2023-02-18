import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id = "" }: Props) {
  return (
    <div id={id} className={`h-screen box-border ${className}`}>
      {children}
    </div>
  );
}
