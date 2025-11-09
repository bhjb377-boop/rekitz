import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const navItems = [
  { label: "Home", active: true },
  { label: "About Us", active: false },
  { label: "Properties", active: false },
  { label: "Services", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start bg-transparent border-b border-neutral-800">
      <div className="flex items-center justify-center gap-2.5 px-40 py-[18px] relative w-full bg-grey-10 border-b border-neutral-800">
        <img
          className="absolute top-0 left-0 w-full h-[63px] object-cover"
          alt="Abstract design"
          src="/abstract-design.svg"
        />

        <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap z-10">
          ✨Discover Your Dream Property with Estatein
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] underline whitespace-nowrap cursor-pointer z-10">
          Learn More
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-[calc(50%-16px)] right-8 w-8 h-8 z-10"
        >
          <XIcon className="w-5 h-5 text-white" />
        </Button>
      </div>

      <div className="flex items-center justify-between px-[162px] py-5 relative w-full bg-grey-10">
        <img className="relative w-40 h-12" alt="Logo" src="/logo.svg" />

        <nav className="flex items-center gap-[30px] absolute top-[calc(50%-28px)] left-[calc(50%-203px)]">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`h-auto ${
                item.active
                  ? "bg-grey-08 rounded-[10px] border border-neutral-800 px-6 py-3.5"
                  : "bg-transparent border-0 px-0 py-0"
              }`}
            >
              <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        <Button
          variant="outline"
          className="h-auto bg-grey-08 rounded-[10px] border border-neutral-800 px-6 py-4"
        >
          <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            Contact Us
          </span>
        </Button>
      </div>
    </header>
  );
};
