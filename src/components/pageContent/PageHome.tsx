import SectionPartner from "@/components/sections/common/SectionPartner";
import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeTraining from "@/components/sections/home/SectionHomeTraining";
import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage`}>
        <SectionHomeBanner />
        <SectionHomeAbout />
        <SectionHomeTraining />
        <SectionPartner />
      </div>
    </>
  );
}

export default memo(PageHome);
