import { ReactNode } from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-3 my-2">{children}</div>;
}
