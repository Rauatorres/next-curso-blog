import Link from "next/link";
import { ReactNode } from "react";

type PostHeadingProps = {
  children: ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export default function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight font-extrabold sm:text-4xl",
    h2: "text-2xl/tight font-bold",
  };

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link className="hover:text-slate-600" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
