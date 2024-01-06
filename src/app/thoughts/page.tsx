const Thoughts = () => {
  return (
    <div className="min-h-screen bg-mydark flex  items-center flex-col overflow-x-hidden max-w-[1324px] px-10 2xl:px-0 mx-auto">
      <div className="  leading-tight  grid grid-cols-2 pt-[90px] mt-[123px] gap-[228px] ">
        <div>
          <h1 className="text-[52px] font-aeonik font-normal">
            Through a Designer's Lens, My Thoughts on Tomorrow.
          </h1>
        </div>
        <div className="mt-auto font-aeonik font-normal text-[17px] leading-relaxed text-[#A7B5C4] px-16">
          <p>
            This Is My Personal Design Odyssey Through The Web3 Universe. Join
            Me As I Share My Unique Perspective and Experiences As A Graphic
            Designer Embracing the Decentralized Future.
          </p>
        </div>
      </div>

      <div className="border  w-[1088px] border-b border-[#414C56] mt-[70px]"></div>

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
    </div>
  );
};

export default Thoughts;
