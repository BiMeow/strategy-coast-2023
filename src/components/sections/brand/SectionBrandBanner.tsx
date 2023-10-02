import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

function SectionBrandBanner({ data, ...props }: any) {
  const router = useRouter();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > 1280) {
        setTimeout(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionBrandBanner",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".bannerImage", { y: 0 }, { y: -150 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionBrandBanner",
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
              ".bannerButton",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1
            )
            .fromTo(
              ".bannerDes",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1.5
            );
        }, 1500);
      } else {
        setTimeout(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionBrandBanner",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".bannerImage", {}, {});

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".SectionBrandBanner",
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
              ".bannerButton",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1
            )
            .fromTo(
              ".bannerDes",
              { y: 150, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: Power4.easeOut },
              1.5
            );
        }, 1500);
      }
    }

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className={`SectionBrandBanner`}>
        <div className="cusContainer">
          <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden w-full h-[calc(100vh-40px)] mb:h-[calc(100vh-20px)]">
            <div className="absImg overflow-hidden">
              <img
                src={data?.image || "/images/brand/banner.jpg"}
                alt=""
                className="bannerImage w-full h-[calc(100%+150px)] object-cover max-h-none"
              />
            </div>

            <div className="content w-full max-w-[950px] pt-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bannerTitle">
                <p className="uppercase text-[32px] leading-[1] mb-[10px] text-white text-center mb:text-[18px]">
                  Chương trình huấn luyện
                </p>
                <h1 className="text-[64px] text-white text-center leading-[1] mb-[10px] mb:text-[50px]">
                  Brand Growth Retreat®
                </h1>
                <p className="text-[32px] text-white text-center leading-[1] mb-[50px] mb:text-[22px]">
                  Tăng trưởng thương hiệu
                </p>
              </div>
              <div className="bannerButton flex justify-center mb-[75px]">
                <button className="relative btnMainGreen">
                  Đăng ký ghi danh
                  <Link
                    href={
                      "https://docs.google.com/forms/d/1MfVRukCNszqmLORi_UVKajdS6KNKXQW5nXa4b3eEBZs/formrestricted"
                    }
                    target="_blank"
                    className="absImg"
                  ></Link>
                </button>
              </div>
              <p className="bannerDes text-white text-center text-[20px] mb:text-[16px]">
                Thời lượng: 3 ngày Thứ Bảy (6 buổi)
                <br />
                Ngày học:{" "}
                <span className="font-FirsNeueMedium">14/10, 21/10, 28/10</span>
                <br />
                Địa điểm: 28 Thảo Điền, Quận 2, TP. HCM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionBrandBanner);
