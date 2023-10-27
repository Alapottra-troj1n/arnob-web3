const ConnectSection = () => {
  return (
    <div className=" h-full flex justify-center items-center flex-col ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10">
        <img src="/mascot.svg" alt="mascot" className="w-40 animate-bounce  " />
        </div>
        <div className="flex flex-col justify-center gap-6" >
          <h1 className="text-center text-4xl font-bold uppercase text-primary">
            Let's connect, see what <br /> magic we can
            <span className="text-mywhite"> create</span> <br /> together
          </h1>
          <a href="mailto:letsconnect@arnob.com" className="text-2xl text-mygray underline text-center font-light">letsconnect@arnob.com</a>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
