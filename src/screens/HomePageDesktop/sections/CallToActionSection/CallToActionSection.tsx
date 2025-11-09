import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const faqCards = [
  {
    question: "How do I search for properties on Estatein?",
    description:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    question: "What documents do I need to sell my property through Estatein?",
    description:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    question: "How can I contact an Estatein agent?",
    description:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-20 relative">
      <div className="flex items-end gap-[200px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-3.5 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Frequently Asked Questions
          </div>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Find answers to common questions about Estatein&#39;s services,
            property listings, and the real estate process. We&#39;re here to
            provide clarity and assist you every step of the way.
          </p>

          <img
            className="absolute -top-10 -left-5 w-[68px] h-[30px]"
            alt="Abstract design"
            src="/abstract-design-1.svg"
          />
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center gap-2 px-6 py-[18px] h-auto relative flex-[0_0_auto] bg-grey-10 rounded-[10px] border border-solid border-neutral-800 hover:bg-grey-15"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            View All FAQ&apos;s
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          {faqCards.map((faq, index) => (
            <Card
              key={index}
              className="flex-1 grow bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="gap-[30px] flex flex-col items-start p-[50px]">
                <h3 className="font-semibold text-white text-2xl leading-9 relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                  {faq.question}
                </h3>

                <p className="font-medium text-grey-60 tracking-[-0.11px] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                  {faq.description}
                </p>

                <Button
                  variant="outline"
                  className="inline-flex items-start gap-2.5 px-6 py-[18px] h-auto relative flex-[0_0_auto] bg-grey-10 rounded-[10px] border border-solid border-neutral-800 hover:bg-grey-15"
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[23.6px] whitespace-nowrap">
                    Read More
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start justify-between pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-800">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 10</span>
          </div>

          <img
            className="relative flex-[0_0_auto]"
            alt="Buttons container"
            src="/buttons-container.svg"
          />
        </div>
      </div>
    </section>
  );
};
