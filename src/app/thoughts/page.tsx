import BlogSection from "@/app/thoughts/_components/BlogSection";

import { sanityClient } from "../../../sanity/lib/client";

const Thoughts = async () => {

  const posts = await sanityClient.fetch({
    query: `
    *[_type == "post"] {
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
  });



  return (
    <div className="min-h-screen bg-mydark flex  items-center flex-col overflow-x-hidden max-w-[1324px] px-10 2xl:px-0 mx-auto">
      <div className="  leading-tight  grid lg:grid-cols-2 pt-[90px] mt-[73px] lg:mt-[123px] gap-[50px] lg:gap-[228px] ">
        <div>
          <h1 className="text-[36px] lg:text-[52px] font-aeonik font-normal">
            Through a Designer's Lens, My Thoughts on Tomorrow.
          </h1>
        </div>
        <div className=" lg:mt-auto  font-aeonik font-normal text-[17px] leading-relaxed text-[#A7B5C4] lg:px-16">
          <p className="text-left">
            This Is My Personal Design Odyssey Through The Web3 Universe. Join
            Me As I Share My Unique Perspective and Experiences As A Graphic
            Designer Embracing the Decentralized Future.
          </p>
        </div>
      </div>

      <div className="border  w-[1088px] border-b border-[#414C56]/50 mt-[50px] lg:mt-[70px]"></div>

      <BlogSection posts={posts} />
    </div>
  );
};

export default Thoughts;
