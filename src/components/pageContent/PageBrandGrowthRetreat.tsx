import SectionBrandAbout from "@/components/sections/brand/SectionBrandAbout";
import SectionBrandBanner from "@/components/sections/brand/SectionBrandBanner";
import SectionBrandCourse from "@/components/sections/brand/SectionBrandCourse";
import SectionBrandMoreInfo from "@/components/sections/brand/SectionBrandMoreInfo";
import SectionPartner from "@/components/sections/common/SectionPartner";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageBrandGrowthRetreat({ ...props }) {
  const router = useRouter();

  const [pageContent, setPageContent] = useState<any>();

  const fetchPageContent = async () => {
    const ApiCall = await fetch(
      `https://api-coast.unixcode.dev/api/v1/pages/find-by-page-code?pageCode=TRAINING`
    );
    const res = await ApiCall.json();

    if (res.status) {
      setPageContent(res.data?.content);
    }
  };

  useEffect(() => {
    fetchPageContent();
  }, []);

  console.log(`BiMeow pageContent`, pageContent);

  return (
    pageContent && (
      <>
        <div className={`PageBrandGrowthRetreat mainPage`}>
          {pageContent.banner && (
            <SectionBrandBanner data={pageContent.banner} />
          )}
          <SectionBrandAbout
            slogan={pageContent.slogan}
            intro={pageContent.introduce}
            awards={pageContent.awards}
          />
          <SectionBrandMoreInfo
            data={pageContent.about}
            listCoach={pageContent.coach}
          />
          <SectionBrandCourse data={pageContent.expense} />
          <SectionPartner isHome={false} />
        </div>
      </>
    )
  );
}

export default memo(PageBrandGrowthRetreat);
