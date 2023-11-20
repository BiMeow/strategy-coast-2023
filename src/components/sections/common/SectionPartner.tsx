import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import gsap, { Back, Bounce } from "gsap";

let listPartnerDark = [
  {
    image: "/images/partner/partner-dark-1.png",
  },
  {
    image: "/images/partner/partner-dark-2.png",
  },
  {
    image: "/images/partner/partner-dark-3.png",
  },
  {
    image: "/images/partner/partner-dark-4.png",
  },
];

let listPartnerLight = [
  {
    image: "/images/partner/partner-light-1.png",
  },
  {
    image: "/images/partner/partner-light-2.png",
  },
  {
    image: "/images/partner/partner-light-3.png",
  },
  {
    image: "/images/partner/partner-light-4.png",
  },
];

function SectionPartner({ isHome = true, data = [], ...props }: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".listPartner",
            start: "top 60%",
          },
        })
        .fromTo(
          ".itemPartner",
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, stagger: 0.3, ease: Bounce.easeInOut }
        );
    }, 800);
  }, []);

  return (
    <>
      <div className={`SectionPartner mb-[175px] mb:mb-[50px]`}>
        <div className="cusContainer">
          <h2
            className={`
          text-[92px] mb:text-[64px] text-center mb-[60px] fadeUp
          ${isHome ? "text-greenDark" : "text-green"}
          `}
          >
            Đối tác
          </h2>

          <div className="listPartner flex flex-wrap items-center justify-between px-[175px] tl-l:px-0">
            {isHome
              ? data.length > 0 &&
                data.map((e: any, i: any) => (
                  <div
                    className="itemPartner tl-p:mb-[40px] tl-p:w-full"
                    key={i}
                  >
                    <img
                      src={e.image}
                      alt=""
                      className="h-[60px] w-auto mx-auto mb:h-[40px]"
                    />
                  </div>
                ))
              : listPartnerLight.map((e: any, i: any) => (
                  <div
                    className="itemPartner tl-p:mb-[40px] tl-p:w-full"
                    key={i}
                  >
                    <img
                      src={e.image}
                      alt=""
                      className="h-[60px] w-auto mx-auto mb:h-[40px]"
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionPartner);
