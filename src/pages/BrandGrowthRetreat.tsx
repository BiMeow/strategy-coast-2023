import MasterPage from "@/components/master/MasterPage";
import dynamic from "next/dynamic";

const PageBrandGrowthRetreat = dynamic(
  () => import("@/components/pageContent/PageBrandGrowthRetreat")
);

export default function BrandGrowthRetreat() {
  return (
    <MasterPage isHome={false} activeNav={1}>
      <PageBrandGrowthRetreat />
    </MasterPage>
  );
}
