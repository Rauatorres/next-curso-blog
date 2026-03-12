import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
