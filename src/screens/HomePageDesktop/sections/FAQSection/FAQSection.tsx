import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const footerLinks = {
  home: [
    { label: "Hero Section", href: "#" },
    { label: "Features", href: "#" },
    { label: "Properties", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "FAQ's", href: "#" },
  ],
  aboutUs: [
    { label: "Our Story", href: "#" },
    { label: "Our Works", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Our Clients", href: "#" },
  ],
  properties: [
    { label: "Portfolio", href: "#" },
    { label: "Categories", href: "#" },
  ],
  services: [
    { label: "Valuation Mastery", href: "#" },
    { label: "Strategic Marketing", href: "#" },
    { label: "Negotiation Wizardry", href: "#" },
    { label: "Closing Success", href: "#" },
    { label: "Property Management", href: "#" },
  ],
  contactUs: [
    { label: "Contact Form", href: "#" },
    { label: "Our Offices", href: "#" },
  ],
};

export const FAQSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-end relative">
      <section className="flex items-center gap-[250px] px-[162px] py-[100px] relative self-stretch w-full border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-neutral-800">
        <img
          className="absolute right-[-92px] bottom-[-63px] w-[633px] h-[331px]"
          alt="Abstract design"
          src="/abstract-design-4.svg"
        />

        <img
          className="absolute left-0 bottom-0 w-[546px] h-[308px]"
          alt="Abstract design"
          src="/abstract-design-3.svg"
        />

        <div className="flex flex-col items-start gap-3.5 relative flex-1 grow z-10">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Start Your Real Estate Journey Today
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Your dream property is just a click away. Whether you&#39;re looking
            for a new home, a strategic investment, or expert real estate
            advice, Estatein is here to assist you every step of the way. Take
            the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <Button className="inline-flex items-center gap-2 px-6 py-[18px] relative flex-[0_0_auto] bg-purple-60 rounded-[10px] hover:bg-purple-60/90 h-auto z-10">
          <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            Explore Properties
          </span>
        </Button>
      </section>

      <footer className="flex flex-col items-start relative self-stretch w-full bg-transparent">
        <div className="flex items-start gap-20 px-[162px] py-[100px] relative self-stretch w-full">
          <div className="flex flex-col w-[538px] items-start gap-[30px] relative">
            <img className="relative w-40 h-12" alt="Logo" src="/logo.svg" />

            <div className="flex w-[423px] items-center gap-2.5 px-6 py-[18px] relative flex-[0_0_auto] bg-grey-08 rounded-xl border border-solid border-neutral-800">
              <img className="relative w-6 h-6" alt="Icon" src="/icon-1.svg" />

              <Input
                type="email"
                placeholder="Enter Your Email"
                className="relative flex-1 [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[-0.11px] leading-6 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
              />

              <button className="relative w-[30px] h-[30px] flex items-center justify-center">
                <img
                  className="relative w-[30px] h-[30px]"
                  alt="Icon"
                  src="/icon-5.svg"
                />
              </button>
            </div>
          </div>

          <nav className="flex items-start justify-between relative flex-1 grow">
            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                Home
              </h3>

              <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                {footerLinks.home.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                About Us
              </h3>

              <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                {footerLinks.aboutUs.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                Properties
              </h3>

              <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                {footerLinks.properties.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                Services
              </h3>

              <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                Contact Us
              </h3>

              <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                {footerLinks.contactUs.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="relative w-fit [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex items-center justify-between px-[162px] py-4 relative self-stretch w-full bg-grey-10">
          <div className="inline-flex items-start gap-[38px] px-0 py-2.5 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[-0.11px] leading-6 whitespace-nowrap">
              @2023 Estatein. All Rights Reserved.
            </p>

            <a
              href="#"
              className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[-0.11px] leading-6 whitespace-nowrap hover:text-purple-60 transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>

          <img
            className="relative flex-[0_0_auto]"
            alt="Social icon"
            src="/social-icon.svg"
          />
        </div>
      </footer>
    </div>
  );
};
