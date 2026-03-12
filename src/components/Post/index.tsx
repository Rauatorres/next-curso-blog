import PostHeading from "../PostHeading";
import PostImage from "../PostImage";

type PostProps = {
  titleType?: "heading" | "subheading";
  href: string;
  src: string;
  title: string;
};

export default function Post({ href, src, title, titleType }: PostProps) {
  let titleTag: "h1" | "h2";

  switch (titleType) {
    case "heading":
      titleTag = "h1";
      break;
    case "subheading":
      titleTag = "h2";
      break;
    default:
      titleTag = "h2";
  }

  return (
    <>
      <PostImage
        linkProps={{
          href: href,
        }}
        imageProps={{
          src: src,
          alt: title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time dateTime="2026-03-11" className="text-slate-500 text-sm">
          11/03/2026 13:27:00
        </time>

        <PostHeading as={titleTag} url={href}>
          {title}
        </PostHeading>

        <p className="max-h-30 overflow-hidden md:max-h-50">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          harum ea iusto eos? Temporibus, necessitatibus repellat. Voluptates
          voluptatibus consequatur ab temporibus placeat accusantium eum
          perspiciatis debitis sapiente consectetur, odit illo nostrum rerum cum
          enim eveniet aperiam illum veritatis deserunt.
        </p>
      </div>
    </>
  );
}
