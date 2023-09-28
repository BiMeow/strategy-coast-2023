import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Loading from "@/components/elements/Loading";
import Preloader from "@/components/elements/Preloader";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

function MasterPage({
  isHome = true,
  activeNav = 2,
  title = "Strategy Coast",
  description = "Strategy - chiến lược / Coast - bờ biển. StrategyCoast® là nơi chúng tôi coach về strategy, và cũng là một nơi “cực chill” để khai mở tầm nhìn và cảm hứng sáng tạo.",
  ...props
}: any) {
  const router = useRouter();

  const { children } = props;

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RNRQXSSZVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RNRQXSSZVJ');
        `}
      </Script>

      <Head>
        <title>{title}</title>

        <link rel="shortcut icon" href={`/images/fav-icon.svg`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`/images/logo.png`} />
      </Head>
      
      <Providers>
        <main
          className={`
          MasterPage min-h-screen py-[20px] 
          mb:py-[10px] mb:pb-[20px]
          ${isHome ? "bg-green" : "bg-greenDark"}
          `}
        >
          <Loading />
          <Header isHome={isHome} activeNav={activeNav} />
          <div className={`pageContent`}>{children}</div>
          <Footer isHome={isHome} />
        </main>
      </Providers>
    </>
  );
}

export default MasterPage;
