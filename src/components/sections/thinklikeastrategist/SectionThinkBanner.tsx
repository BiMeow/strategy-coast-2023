import gsap, { Power4 } from "gsap";
import Link from "next/link";
import { memo, useEffect } from "react";

function SectionThinkBanner({ ...props }) {
  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".SectionHomeBanner",
            start: "top center",
            end: "bottom center",
            scrub: 2,
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
    }, 800);
  }, []);

  return (
    <>
      <div className={`SectionThinkBanner secSpacing`}>
        <div className="cusContainer">
          <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden w-full  h-[calc(100vh-40px)] mb:h-[calc(100vh-20px)]">
            <div className="absImg overflow-hidden">
              <img
                src={"/images/think/banner.png"}
                alt=""
                className="bannerImage w-full h-[calc(100%+150px)] object-cover max-h-none "
              />
            </div>

            <div className="content absolute top-1/2 right-[5%] -translate-y-1/2 text-white mb:w-full mb:right-0 mb:px-[20px]">
              <div className="bannerTitle whitespace-pre-wrap">
                <p className="text-[18px] mb-[15px]">Chương trình huấn luyện</p>
                <h1 className="text-[48px] mb-[45px] tl-l:text-[45px]">
                  THINK LIKE A STRATEGIST
                </h1>

                <button className="relative btnMainGreen mb-[30px]">
                  Đăng ký ghi danh
                  <Link
                    href={"https://forms.gle/96t7TVPiq9uPuV9H7"}
                    target="_blank"
                    className="absImg"
                  />
                </button>
              </div>
              <p className="bannerDes text-[20px] mb:text-[16px]">
                Thời lượng: 2 ngày Thứ Bảy/Chủ Nhật
                <br />
                Ngày học: 21-22/9/2024
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

export default memo(SectionThinkBanner);
