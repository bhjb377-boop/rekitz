import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const properties = [
  {
    id: 1,
    image: "/image.png",
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    bedrooms: "4-Bedroom",
    bathrooms: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    id: 2,
    image: "/image-1.png",
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    bedrooms: "2-Bedroom",
    bathrooms: "2-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
  {
    id: 3,
    image: "/image-2.png",
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    bedrooms: "3-Bedroom",
    bathrooms: "3-Bathroom",
    type: "Villa",
    price: "$550,000",
  },
];

export const FeaturedPropertiesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-20 w-full">
      <div className="flex items-end gap-[200px] w-full">
        <div className="flex flex-col items-start gap-3.5 flex-1 relative">
          <h2 className="self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Featured Properties
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &#34;View Details&#34; for more
            information.
          </p>

          <img
            className="absolute -top-10 -left-5 w-[68px] h-[30px]"
            alt="Abstract design"
            src="/abstract-design-1.svg"
          />
        </div>

        <Button className="inline-flex items-center gap-2 px-6 py-[18px] bg-grey-10 rounded-[10px] border border-solid border-neutral-800 hover:bg-grey-15 h-auto">
          <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            View All Properties
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] w-full">
        <div className="grid grid-cols-3 gap-[30px] w-full">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="flex flex-col items-start gap-[30px] p-10 bg-grey-08 rounded-xl overflow-hidden border border-solid border-neutral-800"
            >
              <CardContent className="flex flex-col items-start gap-[30px] w-full p-0">
                <img
                  className="w-full h-[318px] rounded-[10px] object-cover"
                  alt={property.title}
                  src={property.image}
                />

                <div className="flex flex-col items-start gap-[30px] w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <h3 className="font-semibold text-white text-2xl leading-9 w-full mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                      {property.title}
                    </h3>

                    <p className="font-medium text-grey-60 tracking-[0] w-full [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                      <span className="text-[#999999]">
                        {property.description}{" "}
                      </span>
                      <span className="text-white underline cursor-pointer">
                        Read More
                      </span>
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 w-full flex-wrap">
                    <Badge className="inline-flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 hover:bg-grey-10">
                      <img
                        className="w-6 h-6"
                        alt="Bedroom icon"
                        src="/icon-2.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        {property.bedrooms}
                      </span>
                    </Badge>

                    <Badge className="inline-flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 hover:bg-grey-10">
                      <img
                        className="w-6 h-6"
                        alt="Bathroom icon"
                        src="/icon-12.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        {property.bathrooms}
                      </span>
                    </Badge>

                    <Badge className="inline-flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 hover:bg-grey-10">
                      <img
                        className="w-6 h-6"
                        alt="Property type icon"
                        src="/icon.svg"
                      />
                      <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        {property.type}
                      </span>
                    </Badge>
                  </div>

                  <div className="flex items-end gap-[50px] w-full">
                    <div className="inline-flex flex-col items-start gap-0.5">
                      <span className="font-medium text-grey-60 text-lg leading-[27px] mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                        Price
                      </span>
                      <span className="[font-family:'Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-9">
                        {property.price}
                      </span>
                    </div>

                    <Button className="flex items-center justify-center gap-2 px-6 py-[18px] flex-1 bg-purple-60 rounded-[10px] hover:bg-purple-75 h-auto">
                      <span className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        View Property Details
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start justify-between pt-5 pb-0 px-0 w-full border-t border-solid border-neutral-800">
          <p className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 60</span>
          </p>

          <img
            className="flex-[0_0_auto]"
            alt="Buttons container"
            src="/buttons-container.svg"
          />
        </div>
      </div>
    </section>
  );
};
