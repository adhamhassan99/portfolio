import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: Props) {
  return <div className={`h-screen ${className}`}>{children}</div>;
}
