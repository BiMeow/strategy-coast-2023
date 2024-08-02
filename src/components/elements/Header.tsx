import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

let listMenu = [
  {
    title: "Think like a Strategist®",
    href: "/thinklikeastrategist",
  },
  {
    title: "Brand Growth Retreat®",
    href: "/BrandGrowthRetreat",
  },
  {
    title: "Giới thiệu StrategyCoast®",
    href: "/",
  },
];

function Header({ activeNav = 2, ...props }: any) {
  const router = useRouter();

  const { width } = useWindowSize();

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
            overflow-auto duration-500
            tl-p:mt-[20px]
            mb:text-[16px]
            ${showMenu ? "mb:max-h-[100px]" : "mb:max-h-0 mb:opacity-0"}
            `}
          >
            <div className="flex w-max space-x-[45px] text-white text-[20px] font-FirsNeueMedium mb:space-x-[25px]">
              {listMenu.map((e: any, i: number) => (
                <div className="relative group cursor-pointer" key={i}>
                  <p
                    className={`
                  duration-300 group-hover:text-green whitespace-nowrap
                  ${activeNav == i ? "text-green" : "text-white"}
                  `}
                  >
                    {e.title}
                  </p>
                  <Link href={e.href} className="absImg"></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
