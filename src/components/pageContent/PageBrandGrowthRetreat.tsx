import SectionBrandAbout from "@/components/sections/brand/SectionBrandAbout";
import SectionBrandBanner from "@/components/sections/brand/SectionBrandBanner";
import SectionBrandCourse from "@/components/sections/brand/SectionBrandCourse";
import SectionBrandCourseV2 from "@/components/sections/brand/SectionBrandCourseV2";
import SectionBrandMoreInfo from "@/components/sections/brand/SectionBrandMoreInfo";
import SectionPartner from "@/components/sections/common/SectionPartner";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageBrandGrowthRetreat({ ...props }) {
  const router = useRouter();

  const [pageContent, setPageContent] = useState<any>();

  const fetchPageContent = async () => {
    const ApiCall = await fetch(
      `https://api-coast.aivn.site/api/v1/pages/find-by-page-code?pageCode=TRAINING`
    );
    const res = await ApiCall.json();

    if (res.status) {
      setPageContent(res.data?.content);
    }
  };

  useEffect(() => {
    fetchPageContent();
  }, []);

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
          <SectionBrandCourseV2 data={pageContent.expense} />
          <SectionPartner isHome={false} />
        </div>
      </>
    )
  );
}

export default memo(PageBrandGrowthRetreat);
