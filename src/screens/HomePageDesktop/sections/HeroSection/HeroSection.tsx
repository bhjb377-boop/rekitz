import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const stats = [
  {
    value: "200+",
    label: "Happy Customers",
  },
  {
    value: "10k+",
    label: "Properties For Clients",
  },
  {
    value: "16+",
    label: "Years of Experience",
  },
];

const features = [
  {
    icon: "/icon-container-1.svg",
    title: "Find Your Dream Home",
  },
  {
    icon: "/icon-container.svg",
    title: "Unlock Property Value",
  },
  {
    icon: "/icon-container-3.svg",
    title: "Effortless Property Management",
  },
  {
    icon: "/icon-container-2.svg",
    title: "Smart Investments, Informed Decisions",
  },
];

const circularTextLetters = [
  {
    char: "✨",
    rotation: "rotate-[172.02deg]",
    top: "top-[126px]",
    left: "left-[72px]",
  },
  {
    char: "D",
    rotation: "rotate-[-171.37deg]",
    top: "top-[125px]",
    left: "left-[57px]",
  },
  {
    char: "i",
    rotation: "rotate-[-160.43deg]",
    top: "top-[122px]",
    left: "left-12",
  },
  {
    char: "s",
    rotation: "rotate-[-151.52deg]",
    top: "top-[118px]",
    left: "left-[38px]",
  },
  {
    char: "c",
    rotation: "rotate-[-140.17deg]",
    top: "top-[111px]",
    left: "left-7",
  },
  {
    char: "o",
    rotation: "rotate-[-127.61deg]",
    top: "top-[101px]",
    left: "left-[18px]",
  },
  {
    char: "v",
    rotation: "rotate-[-115.06deg]",
    top: "top-[89px]",
    left: "left-2.5",
  },
  {
    char: "e",
    rotation: "rotate-[-102.50deg]",
    top: "top-[77px]",
    left: "left-1.5",
  },
  {
    char: "r",
    rotation: "rotate-[-91.15deg]",
    top: "top-16",
    left: "left-1.5",
  },
  {
    char: "",
    rotation: "rotate-[-82.24deg]",
    top: "top-[54px]",
    left: "left-2",
  },
  {
    char: "Y",
    rotation: "rotate-[-71.30deg]",
    top: "top-[43px]",
    left: "left-[7px]",
  },
  {
    char: "o",
    rotation: "rotate-[-57.93deg]",
    top: "top-[30px]",
    left: "left-3.5",
  },
  {
    char: "u",
    rotation: "rotate-[-45.37deg]",
    top: "top-[19px]",
    left: "left-[23px]",
  },
  {
    char: "r",
    rotation: "rotate-[-34.44deg]",
    top: "top-[11px]",
    left: "left-[33px]",
  },
  {
    char: "",
    rotation: "rotate-[-25.52deg]",
    top: "top-1.5",
    left: "left-[43px]",
  },
  {
    char: "D",
    rotation: "rotate-[-14.18deg]",
    top: "top-0.5",
    left: "left-[51px]",
  },
  {
    char: "r",
    rotation: "rotate-[-2.03deg]",
    top: "top-px",
    left: "left-[67px]",
  },
  {
    char: "e",
    rotation: "rotate-[9.32deg]",
    top: "top-px",
    left: "left-[77px]",
  },
  {
    char: "a",
    rotation: "rotate-[22.28deg]",
    top: "top-[5px]",
    left: "left-[91px]",
  },
  {
    char: "m",
    rotation: "rotate-[37.27deg]",
    top: "top-[13px]",
    left: "left-[103px]",
  },
  {
    char: "",
    rotation: "rotate-[49.83deg]",
    top: "top-[22px]",
    left: "left-[118px]",
  },
  {
    char: "P",
    rotation: "rotate-[59.96deg]",
    top: "top-8",
    left: "left-[122px]",
  },
  {
    char: "r",
    rotation: "rotate-[70.90deg]",
    top: "top-[42px]",
    left: "left-32",
  },
  {
    char: "o",
    rotation: "rotate-[82.24deg]",
    top: "top-[54px]",
    left: "left-[130px]",
  },
  {
    char: "p",
    rotation: "rotate-[95.20deg]",
    top: "top-[69px]",
    left: "left-[129px]",
  },
  {
    char: "e",
    rotation: "rotate-[108.17deg]",
    top: "top-[82px]",
    left: "left-[127px]",
  },
  {
    char: "r",
    rotation: "rotate-[119.51deg]",
    top: "top-[94px]",
    left: "left-[123px]",
  },
  {
    char: "t",
    rotation: "rotate-[129.23deg]",
    top: "top-[103px]",
    left: "left-[117px]",
  },
  {
    char: "y",
    rotation: "rotate-[140.17deg]",
    top: "top-[111px]",
    left: "left-[107px]",
  },
  {
    char: "",
    rotation: "rotate-[150.30deg]",
    top: "top-[117px]",
    left: "left-[101px]",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start relative">
      <div className="flex items-center gap-20 relative w-full">
        <div className="flex flex-col items-start justify-center gap-[60px] pl-[162px] pr-0 py-0 relative flex-1 z-[1]">
          <div className="flex flex-col items-end gap-6 relative w-full">
            <h1 className="font-semibold text-white text-6xl leading-[72.0px] relative w-full mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
              Discover Your Dream Property with Estatein
            </h1>

            <p className="font-medium text-grey-60 tracking-[0] relative w-full [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            <div className="flex w-[175px] h-[175px] items-start gap-[15.91px] p-[47.73px] absolute top-0 right-[-159px] bg-grey-08 rounded-[159.09px] overflow-hidden border-[1.59px] border-solid border-neutral-800">
              <div className="relative w-[79.55px] h-[79.55px] bg-grey-10 rounded-[89.09px] border-[1.59px] border-solid border-neutral-800" />

              <img
                className="absolute top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_17px)] w-[34px] h-[34px]"
                alt="Icon"
                src="/icon-3.svg"
              />

              <div className="absolute top-[calc(50.00%_-_72px)] left-[calc(50.00%_-_72px)] w-[204px] h-36">
                {circularTextLetters.map((letter, index) => (
                  <div
                    key={index}
                    className={`absolute ${letter.top} ${letter.left} ${letter.rotation} [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap`}
                  >
                    {letter.char}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full relative">
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-[18px] rounded-[10px] border border-solid border-neutral-800 bg-transparent hover:bg-grey-10"
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Learn More
              </span>
            </Button>

            <Button className="h-auto inline-flex items-center justify-center gap-2 px-6 py-[18px] bg-purple-60 rounded-[10px] hover:bg-purple-60/90">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                Browse Properties
              </span>
            </Button>
          </div>

          <div className="flex items-start gap-5 relative w-full">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="flex-1 bg-grey-10 rounded-xl border border-solid border-neutral-800"
              >
                <CardContent className="flex flex-col items-start gap-0.5 px-6 py-4">
                  <div className="font-bold text-white text-[40px] leading-[60px] relative w-full mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                    {stat.value}
                  </div>

                  <div className="font-medium text-grey-60 tracking-[0] relative w-full [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <img
          className="relative flex-1 h-[814px] z-0"
          alt="Container"
          src="/container-3.svg"
        />
      </div>

      <div className="flex items-center gap-5 p-5 relative w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-grey-08 border border-solid border-neutral-800 shadow-[0px_0px_0px_10px_#191919]">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex-1 bg-grey-10 rounded-xl border border-solid border-neutral-800 relative"
          >
            <CardContent className="flex flex-col items-center gap-5 px-5 py-10">
              <img
                className="relative flex-[0_0_auto]"
                alt="Icon container"
                src={feature.icon}
              />

              <h3 className="relative w-full [font-family:'Urbanist',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[30px]">
                {feature.title}
              </h3>

              <img
                className="absolute top-5 right-5 w-[34px] h-[34px]"
                alt="Icon"
                src="/icon-3.svg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
