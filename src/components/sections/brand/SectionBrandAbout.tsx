import { IconArrow } from "@/components/elements/Icon";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listFeature = [
  {
    title:
      "HỆ THỐNG HOÁ kiến thức giữa biển thông tin và các tư vấn trái ngược nhau.",
  },
  {
    title:
      "Học cách tư duy chiến lược bài bản, khi ta hay bị xao nhãng bởi các vấn đề vận hành và trào lưu ngắn hạn.",
  },
  {
    title:
      "TÌM KIẾM CẢM HỨNG sáng tạo cho thương hiệu, khi tầm nhìn bị bó hẹp vì quá gần, quá quen với thương hiệu và ngành hàng của mình.",
  },
];

function SectionBrandAbout({ slogan, intro, awards = [], ...props }: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".brandAboutImage",
            start: "top 25%",
            end: "bottom top",
            scrub: 3,
          },
        })
        .fromTo(".brandAboutImage", { y: 0 }, { y: 100 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".listFeature",
            start: "top 60%",
          },
        })
        .fromTo(
          ".itemFeature",
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, stagger: 0.5 }
        );
    }, 1500);
  }, []);

  return (
    <>
      <div
        className={`SectionBrandAbout relative z-10 mt-[-40px] mb-[80px] tl-p:mb-[40px]`}
      >
        <div className="cusContainer text-green">
          {slogan && (
            <div className="heading text-center mb-[70px]">
              <div className="text-[110px] mb-[20px] tl-l:text-[90px] mb:text-[48px] fadeUp">
                {slogan?.title ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: slogan?.title,
                    }}
                  />
                ) : (
                  <h2>
                    RETHINK. REFLECT.
                    <br />
                    REIMAGINE YOUR BRAND.
                  </h2>
                )}
              </div>
              <p className="text-[36px] mb-[30px] mb:text-[20px] fadeIn">
                Time to get your brand a retreat!
              </p>
              <p className="text-[26px] mb:text-[16px] fadeIn">
                Một chương trình huấn luyện tràn đầy cảm hứng, dành cho{" "}
                <br className="mb:hidden" /> cá nhân và doanh nghiệp cần được HỆ
                THỐNG HOÁ kiến <br className="mb:hidden" /> thức và KHAI MỞ TẦM
                NHÌN tăng trưởng thương hiệu.
              </p>
            </div>
          )}

          {intro && (
            <div className="content">
              <div className="image brandAboutImage relative rounded-[50px] mb:rounded-[30px] overflow-hidden">
                <div className="aspect-[1400/675] tl-p:aspect-[1400/775] mb:aspect-1"></div>
                <img
                  src={intro?.image || "/images/brand/about.jpg"}
                  alt=""
                  className="absImg"
                />
              </div>

              <div className="text-[36px] w-[40%] mt-[-165px] mb-[50px] relative z-10 tl-p:w-[75%] mb:w-full mb:mt-[-100px] mb:text-[26px] fadeUp">
                {intro?.description ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: intro?.description,
                    }}
                  />
                ) : (
                  <p>
                    Brand Growth Retreat là một hành trình “đưa nhau đi trốn" để
                    suy ngẫm về con đường tăng trưởng thương hiệu tại một khu
                    vườn xanh giữa Thảo Điền, Q.2.
                    <br />
                    <br />
                    Chương trình diễn ra cô đọng trong 6 buổi, được thiết kế cho
                    các anh chị và doanh nghiệp có nhu cầu:
                  </p>
                )}
              </div>

              <div className="listFeature flex flex-wrap items-stretch mx-[-8px]">
                {awards.length > 0
                  ? awards.map((e: any, i: number) => (
                      <div
                        className="itemFeature w-1/3 px-[8px] mb:w-full mb:mb-[16px]"
                        key={i}
                      >
                        <div
                          className={`
                          content h-full px-[35px] py-[40px] border-4 border-green rounded-[50px] mb:rounded-[30px]
                          ${i == 0 ? "pr-[37px]" : ""}
                          `}
                        >
                          <p className="text-[110px] leading-[1] max-h-[60px] mb-[20px] tl-p:text-[75px] tl-p:max-h-[40px]">
                            *
                          </p>
                          <div className="text-[28px] whitespace-pre-wrap tl-p:text-[20px]">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: e.description,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  : listFeature.map((e: any, i: number) => (
                      <div
                        className="itemFeature w-1/3 px-[8px] mb:w-full mb:mb-[16px]"
                        key={i}
                      >
                        <div
                          className={`
                          content h-full px-[35px] py-[40px] border-4 border-green rounded-[50px] mb:rounded-[30px]
                          ${i == 0 ? "pr-[37px]" : ""}
                          `}
                        >
                          <p className="text-[110px] leading-[1] max-h-[60px] mb-[20px] tl-p:text-[75px] tl-p:max-h-[40px]">
                            *
                          </p>
                          <div className="text-[28px] whitespace-pre-wrap tl-p:text-[20px]">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: e.description,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(SectionBrandAbout);
