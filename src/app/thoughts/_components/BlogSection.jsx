const BlogSection = ({posts}) => {
    
  return (
    <>
      {" "}
      <div className="mt-[107px] grid grid-cols-3 gap-x-[42px] gap-y-[36px] mb-[292px]">
        <div className="rounded-[12px] h-400 overflow-hidden border border-[#16212A]">
          <img src="/blog.png" className="w-full object-cover" alt="" />

          <div className="p-[24px] bg-[#08131D] font-aeonik font-medium">
            <div className="mb-[15px]  text-[12px]">
              <p className="text-[#717F8E]">May 26, 2023 </p>
            </div>
            <h2 className="text-lg">
              Why Gen Z Matters in Web3 and the urgent need for better brand
              identities...
            </h2>

            <div className="mt-[50px] border w-full border-[#16212A] "></div>

            <div className="mt-[17px] flex justify-center">
              <div className="flex items-center gap-[7px] justify-center">
                <h2 className="text-[14px] font-normal">View Blog Post</h2>
                <img className="w-[14px] h-[10px]" src="/arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
