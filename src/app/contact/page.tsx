const Contact = () => {
  return (
    <div className="min-h-screen bg-mydark ">
      <div className="max-w-[1324px] mx-auto lg:px-0 px-8  pt-[74px] lg:pt-[141px]  lg:pb-[310px] pb-[175px] ">
        <h2 className="text-mywhite font-baseNeue font-black text-[48px] leading-none uppercase text-center">bonjour! <br /> tell me about <br /> your idea</h2>
        <p className="font-aeonik text-xl font-normal text-[#A7B5C4] text-center mt-[38px]" >Have A Project in Mind? Please Share More...</p>

        <form className="mt-[114px]  max-w-[648px] mx-auto space-y-[42px]">

          <div className="flex flex-col w-full">
            <label>Name</label>
            <input type="text" name="name" placeholder="Damien.." className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]" />
          </div>

          <div className="flex flex-col w-full">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Damien@gmail.com" className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]" />
          </div>

          <div className="flex flex-col w-full">
            <label>Company Name</label>
            <input type="text" name="companyName" placeholder="Damian Inc" className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]" />
          </div>

          <div className="flex flex-col w-full">
            <label>What’s On Your Mind?</label>
            <div className="mt-[27px] flex flex-wrap gap-y-[12px] gap-x-[9px]">
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Logo Design</button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Logo + Identity</button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Identity Redesign</button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Web Illustration/ Assets </button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Social Media Post </button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Pitch Deck Design </button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Stationary Design </button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">3D Abstract Shapes </button>
                  <button type="button" className="py-[14px] px-[21px] rounded-[26.5px] border border-mygray text-mygray text-[16px] font-aeonik">Other </button>
            </div>
          </div>



          
        </form>
      </div>
    </div>
  );
};

export default Contact;
