import Link from "next/link";
import Image from "next/image";
import { ComponentProps } from "react";

type PostImageProps = {
  linkProps: ComponentProps<typeof Link>;
  imageProps: ComponentProps<typeof Image>;
  className?: string;
};

export default function PostImage({
  linkProps,
  imageProps,
  className,
}: PostImageProps) {
  return (
    <Link
      {...linkProps}
      className={"w-full h-full overflow-hidden rounded-xl " + className}
    >
      <Image
        {...imageProps}
        alt={imageProps.alt}
        className="hover:scale-105 w-full h-full object-cover object-center transition duration-150 "
      />
    </Link>
  );
}
