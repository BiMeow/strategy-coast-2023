import gsap, { Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

function SectionHomeBanner({ ...props }) {
  const router = useRouter();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > 1280) {
        setTimeout(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionHomeBanner",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".bannerImage", { y: 0 }, { y: -150 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionHomeBanner",
                start: "top bottom",
              },
            })
            .fromTo(
              ".bannerTitle",
              { scale: 0, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, ease: Power4.easeOut },
              0.5
            )
            .fromTo(
              ".bannerDes",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1
            );
        }, 1500);
      } else {
        setTimeout(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionHomeBanner",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".bannerImage", {}, {});

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionHomeBanner",
                start: "top bottom",
              },
            })
            .fromTo(
              ".bannerTitle",
              { scale: 0, autoAlpha: 0 },
              { scale: 1, autoAlpha: 1, ease: Power4.easeOut },
              0.5
            )
            .fromTo(
              ".bannerDes",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1
            );
        }, 1500);
      }
    }
    ScrollTrigger.refresh();
  }, [width]);

  return (
    <>
      <div className={`SectionHomeBanner mb-[70px] tl-l:mb-[40px]`}>
        <div className="cusContainer">
          <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden w-full h-[calc(100vh-40px)] mb:h-[calc(100vh-20px)]">
            <div className="absImg overflow-hidden">
              <img
                src="/images/home/banner.jpg"
                alt=""
                className="bannerImage w-full h-[calc(100%+150px)] object-cover max-h-none"
              />
            </div>

            <div className="content w-full max-w-[950px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="bannerTitle text-[92px] text-white text-center mb-[25px] tl-l:text-[64px] mb:text-[48px]">
                Strategy that <br className="hidden mb:block" /> Inspires
              </h1>
              <p className="bannerDes text-[20px] text-white text-center">
                StrategyCoast® ra đời với tầm <br className="hidden mb:block" />{" "}
                nhìn trở thành nơi của sự <br /> khai mở cảm hứng và sáng tạo{" "}
                <br className="hidden mb:block" />
                hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeBanner);
