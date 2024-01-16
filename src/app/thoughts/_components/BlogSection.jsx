"use client";

import { format, parseISO } from "date-fns";
import Link from "next/link";

const BlogSection = ({ posts }) => {
 

  return (
    <>
      {" "}
      <div className="mt-[45px] lg:mt-[107px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[42px] gap-y-[36px] mb-[292px]">
        {posts &&
          posts.map((post, index) => (
            <div key={post?._id} className="rounded-[12px] h-400 overflow-hidden border border-[#16212A]">
              <img
                src={post.mainImage?.asset?.url}
                className="w-full object-cover"
                alt=""
              />

              <div className="p-[24px] bg-[#08131D] font-aeonik font-medium">
                <div className="mb-[15px]  text-[12px] flex gap-3">
                  <p className="text-[#717F8E]">
                    {post &&
                      post.publishedAt &&
                      format(parseISO(post?.publishedAt), "MMMM d, yyyy")}{" "}
                  </p>
                  {index < 3 && (
                    <span className="bg-primary w-[54px] h-[19px] rounded-full text-white flex justify-center items-center font-aeonik font-medium text-[11px]">
                      LATEST
                    </span>
                  )}
                </div>
                <h2 className="text-lg">{post?.title}</h2>

                <div className="mt-[50px] border w-full border-[#16212A] "></div>

                <div className="mt-[17px] flex justify-center">
                  <Link href={`thoughts/${post?.slug?.current}`}>
                    <div className="flex items-center gap-[7px] justify-center group cursor-pointer">
                      <h2 className="text-[14px] font-normal group-hover:text-primary transition ">
                        View Blog Post
                      </h2>
                      <svg
                      
                        width="14"
                        height="10"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0116 0L13.5791 0.430913L20.9657 7.79391L0.0977868 7.66276H0.0150441L0 8.33724H20.8341L13.5791 15.5691L14.0116 16L21.2516 8.74941L22 8L14.0116 0Z"
                          fill="#CCCCCC"
                          className="group-hover:fill-primary"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BlogSection;
