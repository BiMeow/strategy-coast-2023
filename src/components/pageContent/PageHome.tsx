import SectionPartner from "@/components/sections/common/SectionPartner";
import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeTraining from "@/components/sections/home/SectionHomeTraining";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  const [pageContent, setPageContent] = useState<any>();

  const fetchPageContent = async () => {
    const ApiCall = await fetch(
      `https://api-coast.unixcode.dev/api/v1/pages/find-by-page-code?pageCode=HOME`
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
        <div className={`PageHome mainPage`}>
          {pageContent.banner && (
            <SectionHomeBanner data={pageContent.banner} />
          )}
          {pageContent.about && <SectionHomeAbout data={pageContent.about} />}
          {pageContent.service && (
            <SectionHomeTraining data={pageContent.service} />
          )}
          {pageContent.partners && (
            <SectionPartner data={pageContent.partners} />
          )}
        </div>
      </>
    )
  );
}

export default memo(PageHome);
