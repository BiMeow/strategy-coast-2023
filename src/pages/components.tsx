import MasterPage from "@/components/master/MasterPage";
import dynamic from "next/dynamic";

const PageComponents = dynamic(
  () => import("@/components/pageContent/PageComponents")
);

export default function Home() {
  return (
    <MasterPage activeNav={2} title={"Strategy Coast"}>
      <PageComponents />
    </MasterPage>
  );
}
