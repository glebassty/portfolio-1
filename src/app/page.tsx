// page.tsx
"use client";

import { CardImage } from "@/components/cards/CardImage/CardImage";
import { HeroSection } from "@/components/cards/HeroSection/HeroSection";
import { WorkSection } from "@/components/cards/WorkSection/WorkSection";
import { BoxGradient } from "@/components/ui/BoxGradient/BoxGradient";
import { IconArrow } from "@/components/ui/IconArrow/IconArrow";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <HeroSection
        position="Frontend Developer"
        name="Giovanni Prestoricсhini"
        description="Hello, I'm Giovanni, a passionate frontend developer with a хуй"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
        <div className="flex flex-col gap-3 sm:gap-5">
          <WorkSection title="Work Experience" />
          <CardImage
            imageSrc="/img/product.png"
            imageAlt="iOS Mobile App"
            classNameImage="sm:w-[433px] sm:h-[620px] w-[239px] h-[342px] sm:mt-13.5 mt-6.5 overflow-hidden"
            title="iOS Mobile app"
            description="Product develop"
            className="hidden sm:flex"
          >
            <IconArrow />
          </CardImage>
        </div>
        <div className="flex flex-col gap-3 sm:gap-5">
          <div className="flex flex-col gap-3 sm:gap-5">
            <BoxGradient className="py-8 text-center text-sm sm:py-15 sm:text-2xl">
              Product design
            </BoxGradient>
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <BoxGradient className="py-8 text-center text-sm sm:py-15 sm:text-2xl">
                User Experience
              </BoxGradient>
              <BoxGradient className="py-8 text-center text-sm sm:py-15 sm:text-2xl">
                NoCode develop
              </BoxGradient>
            </div>
          </div>
          <CardImage
            imageSrc="/img/product.png"
            imageAlt="iOS Mobile App"
            classNameImage="sm:w-[433px] sm:h-[620px] w-[239px] h-[342px] sm:mt-13.5 mt-6.5 overflow-hidden"
            title="iOS Mobile app"
            description="Product develop"
            className="flex sm:hidden"
          >
            <IconArrow />
          </CardImage>

          <CardImage
            imageSrc="/img/group_1.png"
            imageAlt="Image of a group"
            classNameImage="sm:w-[360px] sm:h-[306px] w-[200px] h-[170px] sm:mt-18 mt-10"
            title="AI Music product"
            description="UX Case study"
          >
            <IconArrow />
          </CardImage>

          <CardImage
            imageSrc="/img/group_2.png"
            imageAlt="AI Map Redesign"
            classNameImage="sm:w-[322px]  sm:h-[320px] w-[201px] h-[200px] sm:mt-12 mt-7.5 sm:mb-12 mb-5.5"
            title="AI Map redesign"
            description="UX Case study"
          >
            <IconArrow />
          </CardImage>
        </div>
      </div>
    </div>
  );
}
