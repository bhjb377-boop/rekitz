import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    title: "Exceptional Service!",
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    avatar: "/profile.png",
  },
  {
    title: "Efficient and Reliable",
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    avatar: "/profile-1.png",
  },
  {
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    avatar: "/profile-2.png",
  },
];

export const ClientTestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-20 relative">
      <div className="flex items-end gap-[200px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-3.5 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            What Our Clients Say
          </div>

          <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </div>

          <img
            className="absolute -top-10 -left-5 w-[68px] h-[30px]"
            alt="Abstract design"
            src="/abstract-design-1.svg"
          />
        </div>

        <Button
          variant="outline"
          className="inline-flex items-center gap-2 px-6 py-[18px] h-auto relative flex-[0_0_auto] bg-grey-10 rounded-[10px] border border-solid border-neutral-800 text-white hover:bg-grey-15 hover:text-white"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            View All Testimonials
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="gap-10 flex flex-col items-start p-[50px] relative flex-1 grow bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="flex flex-col gap-10 p-0 w-full">
                <div className="flex gap-1 relative flex-[0_0_auto]">
                  {[...Array(5)].map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="font-semibold text-white text-2xl leading-9 relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                    {testimonial.title}
                  </h3>

                  <p className="font-medium text-white tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <Avatar className="relative w-[60px] h-[60px]">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start gap-0.5 relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px]">
                      {testimonial.name}
                    </div>

                    <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[0] leading-[27px]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start justify-between pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-neutral-800">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 10</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="w-[58px] h-[58px] bg-grey-10 border border-solid border-neutral-800 rounded-full hover:bg-grey-15"
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-[58px] h-[58px] bg-grey-10 border border-solid border-neutral-800 rounded-full hover:bg-grey-15"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
