import { format, parseISO } from "date-fns";
import { sanityClient } from "../../../../sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const postSlug = params.slug;

  const post = await sanityClient.fetch<any>({
    query: `
    *[_type == "post" && slug.current == $postSlug] {
      _id,
      title,
      slug,
      author-> {
        _id,
        name,
      },
      mainImage {
        asset->{url, metadata}
      },
      categories[]->{
        title,
      },
      publishedAt,
      body,
    }
  `,
    config: { cache: "no-cache" },
    params: { postSlug },
  });

  return (
    <div className="min-h-screen bg-mydark font-aeonik overflow-x-hidden max-w-[784px] px-10 2xl:px-0  mx-auto mb-[271px]">
      <div className="mt-32 text-mywhite  mb-[38px]">
        <p className="font-normal text-[11px] lg:text-sm mb-[16px] text-[#717F8E]">
          {format(parseISO(post[0]?.publishedAt), "MMMM d, yyyy")}
        </p>
        <h1 className="text-[36px] lg:text-[40px]  font-medium">{post[0]?.title}</h1>
      </div>

      <div className="mb-[65px] lg:mb-[98px]">
        <img
          src={post[0]?.mainImage?.asset?.url}
          alt="main-image"
          className="w-[784px] h-[174px] object-cover rounded-[12px]"
        />
      </div>

      <div className="mb-[86px]">
      <PortableText value={post[0]?.body} />
      </div>
    </div>
  );
};

export default SingleBlog;
