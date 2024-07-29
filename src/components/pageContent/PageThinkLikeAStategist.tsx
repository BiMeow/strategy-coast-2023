import SectionPartner from "@/components/sections/common/SectionPartner";
import SectionThinkBanner from "@/components/sections/thinklikeastrategist/SectionThinkBanner";
import SectionThinkCoach from "@/components/sections/thinklikeastrategist/SectionThinkCoach";
import SectionThinkCourse from "@/components/sections/thinklikeastrategist/SectionThinkCourse";
import SectionThinkInfo from "@/components/sections/thinklikeastrategist/SectionThinkInfo";
import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage pt-[130px]`}>
        <SectionThinkBanner />
        <SectionThinkInfo />
        <SectionThinkCoach />
        <SectionThinkCourse />
        <SectionPartner isHome={false} />
      </div>
    </>
  );
}

export default memo(PageHome);
