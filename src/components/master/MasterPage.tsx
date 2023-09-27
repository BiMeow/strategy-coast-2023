import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import { useRouter } from "next/router";

function MasterPage({ isHome = true, activeNav = 2, ...props }: any) {
  const router = useRouter();

  const { children } = props;

  return (
    <>
      <Providers>
        <main
          className={`MasterPage min-h-screen py-[20px] ${
            isHome ? "bg-green" : "bg-greenDark"
          }`}
        >
          <Header isHome={isHome} activeNav={activeNav} />
          <div className={`pageContent`}>{children}</div>
          <Footer isHome={isHome} />
        </main>
      </Providers>
    </>
  );
}

export default MasterPage;
