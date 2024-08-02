import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Loading from "@/components/elements/Loading";
import Preloader from "@/components/elements/Preloader";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";

function MasterPage({
  isHome = true,
  isThink = false,
  activeNav = 2,
  title = "Strategy Coast",
  description = "Strategy - chiến lược / Coast - bờ biển. StrategyCoast® là nơi chúng tôi coach về strategy, và cũng là một nơi “cực chill” để khai mở tầm nhìn và cảm hứng sáng tạo.",
  ...props
}: any) {
  const router = useRouter();

  const { children } = props;

  const [pageContent, setPageContent] = useState<any>();

  const fetchPageContent = async () => {
    const ApiCall = await fetch(
      `https://api-coast.aivn.site/api/v1/pages/find-by-page-code?pageCode=TRAINING`
    );
    const res = await ApiCall.json();

    if (res.status) {
      setPageContent(res.data?.content);
    }
  };

  useEffect(() => {
    fetchPageContent();
  }, []);

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

      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1055482942201874');
        fbq('track', 'PageView');
      `}
      </Script>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KKPDZ3RV')
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
          ${isThink ? "bg-[#042cba]" : isHome ? "bg-green" : "bg-greenDark"}
          `}
        >
          <Loading />
          <Header isHome={isHome} activeNav={activeNav} />
          <div className={`pageContent`}>{children}</div>
          <Footer isHome={isHome} link={pageContent?.banner?.buttonLink} />

          <noscript
            dangerouslySetInnerHTML={{
              __html: (
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-KKPDZ3RV"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                ></iframe>
              ),
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: (
                <iframe
                  src="https://www.facebook.com/tr?id=1055482942201874&ev=PageView&noscript=1"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                ></iframe>
              ),
            }}
          />
        </main>
      </Providers>
    </>
  );
}

export default MasterPage;
