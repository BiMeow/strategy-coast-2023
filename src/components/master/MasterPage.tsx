import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import { useRouter } from "next/router";

function MasterPage({ isHome = true, ...props }: any) {
  const router = useRouter();

  const { children } = props;

  return (
    <>
      <main
        className={`MasterPage min-h-screen py-[20px] ${
          isHome ? "bg-green" : "bg-greenDark"
        }`}
      >
        <Header isHome={isHome} />
        <div className={`pageContent`}>{children}</div>
        <Footer />
      </main>
    </>
  );
}

export default MasterPage;
