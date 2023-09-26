import MasterPage from "@/components/master/MasterPage";
import dynamic from "next/dynamic";

const PageHome = dynamic(() => import("@/components/pageContent/PageHome"));

export default function Home() {
  return (
    <MasterPage>
      <PageHome />
    </MasterPage>
  );
}
