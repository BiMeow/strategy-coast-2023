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

        <meta charSet="UTF-8" key="charset" />

        <link rel="shortcut icon" href={`/images/fav-icon.svg`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://google-cdn.digitop.vn/strategycoast/banner.jpg?fbclid=IwAR1VfBaKysv8MHY_JizgSgOK4d2HYU5qdDdTw-I02rn7jPz5qeMAqnt3bsU`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
