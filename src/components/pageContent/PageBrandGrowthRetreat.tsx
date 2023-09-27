import SectionBrandAbout from "@/components/sections/brand/SectionBrandAbout";
import SectionBrandBanner from "@/components/sections/brand/SectionBrandBanner";
import SectionBrandCourse from "@/components/sections/brand/SectionBrandCourse";
import SectionBrandMoreInfo from "@/components/sections/brand/SectionBrandMoreInfo";
import { useRouter } from "next/router";
import { memo } from "react";

function PageBrandGrowthRetreat({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageBrandGrowthRetreat mainPage`}>
        <SectionBrandBanner />
        <SectionBrandAbout />
        <SectionBrandMoreInfo />
        <SectionBrandCourse />
      </div>
    </>
  );
}

export default memo(PageBrandGrowthRetreat);
