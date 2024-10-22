import MasterPage from "@/components/master/MasterPage";
import dynamic from "next/dynamic";

const PageComponents = dynamic(
  () => import("@/components/pageContent/PageComponents"),
  { ssr: false }
);

export default function Home() {
  return (
    <MasterPage title={"Strategy Coast"}>
      <PageComponents />
    </MasterPage>
  );
}
