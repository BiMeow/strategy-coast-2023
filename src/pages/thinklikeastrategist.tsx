import MasterPage from "@/components/master/MasterPage";
import dynamic from "next/dynamic";

const PageThinkLikeAStategist = dynamic(
  () => import("@/components/pageContent/PageThinkLikeAStategist")
);

export default function Home() {
  return (
    <MasterPage
      activeNav={0}
      title={"Think like a Strategist"}
      isThink
      isHome={false}
    >
      <PageThinkLikeAStategist />
    </MasterPage>
  );
}
