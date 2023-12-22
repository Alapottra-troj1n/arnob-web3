"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  companyName: string;
  projectType: string[];
  budget: string;
  message: string;
}
const designOptions = [
  "Logo Design",
  "Logo + Identity",
  "Identity Redesign",
  "Web Illustration/Assets",
  "Social Media Post",
  "Pitch Deck Design",
  "Stationary Design",
  "3D Abstract Shapes",
  "Other",
];

const budgetOptions = ["$500 - $1K", "$1K - $2K", "$2K - $3K", ">$3K"];

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-mydark ">
      <div className="max-w-[1324px] mx-auto px-10 2xl:px-0  pt-[74px] lg:pt-[141px]  lg:pb-[310px] pb-[175px] ">
        <h2 className="text-mywhite font-baseNeue font-black text-[48px] leading-none uppercase text-center">
          bonjour! <br /> tell me about <br /> your idea
        </h2>
        <p className="font-aeonik text-xl font-normal text-[#A7B5C4] text-center mt-[38px]">
          Have A Project in Mind? Please Share More...
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[114px]  max-w-[648px] mx-auto space-y-[42px] font-aeonik"
        >
          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">Name</label>
            <input
              type="text"
              required
              {...register("name")}
              placeholder="Damien.."
              className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">Email Address</label>
            <input
              type="email"
              required
              {...register("email")}
              placeholder="Damien@gmail.com"
              className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">Company Name</label>
            <input
              type="text"
              required
              {...register("companyName")}
              placeholder="Damian Inc"
              className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9] h-[70px] pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">
              What’s On Your Mind?
            </label>
            <div className="mt-[27px] flex flex-wrap gap-y-[12px] gap-x-[9px]">
              {designOptions.map((option) => (
                <Controller
                  key={option}
                  name="projectType"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <button
                      type="button"
                      className={`py-[14px] px-[21px] rounded-[26.5px] border  ${
                        watch("projectType")?.includes(option)
                          ? "border-[#10355D] bg-[#092038]"
                          : "border-mygray"
                      } text-mygray text-[16px] font-aeonik`}
                      onClick={() => {
                        const currentSelection = field.value || [];
                        const updatedSelection = currentSelection?.includes(
                          option
                        )
                          ? currentSelection.filter((item) => item !== option)
                          : [...currentSelection, option];
                        field.onChange(updatedSelection);
                      }}
                    >
                      {option}
                    </button>
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">
              How Much Your Budget Range?
            </label>
            <div className="mt-[27px] flex flex-wrap gap-y-[12px] gap-x-[9px]">
              {budgetOptions.map((option) => (
                <Controller
                  key={option}
                  name="budget"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <button
                      type="button"
                      className={`py-[14px] px-[21px] rounded-[26.5px] border  ${
                        watch("budget") === option
                          ? "border-[#10355D] bg-[#092038]"
                          : "border-mygray"
                      } text-mygray text-[16px] font-aeonik`}
                      onClick={() => field.onChange(option)}
                    >
                      {option}
                    </button>
                  )}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[18px] text-mygray">Message</label>
            <textarea
              rows={7}
              required
              {...register("message")}
              name="message"
              placeholder="I Want To Build.."
              className="bg-transparent border-b-[1px] mt-2 border-[#8E9BA9]  pl-4 p-1 placeholder-[#717F8E] placeholder:font-aeonik placeholder:text-[18px]"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="h-[78px] w-[170px] bg-mylightgray text-mydark rounded-[39px] font-medium text-[22px] hover:bg-primary transition-all"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
