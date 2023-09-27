import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

function Header({ activeNav = 2, ...props }: any) {
  const router = useRouter();

  const { width } = useWindowSize();

  const [scrollY, setScrollY] = useState<number>(0);
  const [prevY, setPrevY] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // const handleScroll = () => {
  //   let curY = window.scrollY;

  //   if (curY < 50) {
  //     setIsTopPage(true);
  //     setShowHeader(true);
  //   } else {
  //     setIsTopPage(false);
  //     setShowHeader(false);
  //   }

  //   if (prevY < curY) setShowHeader(false);
  //   else setShowHeader(true);

  //   setPrevY(curY);
  // };

  // useEffect(() => {
  //   handleScroll();
  // }, [scrollY]);

  // useEffect(() => {
  //   // listen for browser changed
  //   const handler = () => {
  //     if (window) {
  //       const scrollY = window.scrollY;
  //       setScrollY(scrollY);
  //     }
  //   };

  //   if (window) {
  //     window.addEventListener("scroll", handler, {
  //       capture: false,
  //       passive: true,
  //     });
  //     handler();
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handler);
  //   };
  // }, []);

  return (
    <>
      <div
        className={`
        Header absolute w-full pb-[20px] z-[444] top-0 left-0 px-[75px] duration-300
        tl-p:px-[30px]
        ${
          isTopPage
            ? "pt-[60px] tl-p:pt-[30px]"
            : "pt-[20px] bg-[#000d] backdrop-blur-[20px]"
        }
        ${width < 767 ? (showHeader ? "" : "translate-y-[-100%]") : ""}
        `}
      >
        <div className="flex flex-wrap items-center justify-between">
          <Link href={"/"}>
            <img
              src="/images/Logo.png"
              alt=""
              className="max-w-[180px] mb:max-w-[120px]"
            />
          </Link>

          <div
            className={`
            text-[40px] hidden cursor-pointer tl-p:block
            ${showMenu ? "text-green" : "text-white"}
            `}
            onClick={() => setShowMenu(!showMenu)}
          >
            <p>&#x2022;&#x2022;&#x2022;</p>
          </div>

          <div
            className={`
            flex space-x-[45px] text-white text-[20px] font-FirsNeueMedium overflow-hidden duration-500
            tl-p:w-full tl-p:justify-end tl-p:mt-[20px]
            mb:text-[16px]
            ${
              width < 767
                ? showMenu
                  ? "max-h-[100px]"
                  : "max-h-0 opacity-0"
                : ""
            }
            `}
          >
            <div className="relative group cursor-pointer ">
              <p
                className={`
                duration-300 group-hover:text-green
                ${activeNav == 1 ? "text-green" : "text-white"}
                `}
              >
                Brand Growth Retreat®
              </p>
              <Link href="/BrandGrowthRetreat" className="absImg"></Link>
            </div>

            <div className="relative group cursor-pointer ">
              <p
                className={`
               duration-300 group-hover:text-green
                ${activeNav == 2 ? "text-green" : "text-white"}
                `}
              >
                Giới thiệu StrategyCoast®
              </p>
              <Link href="/" className="absImg"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
