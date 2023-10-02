import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let listTraining = [
  {
    title: "Huấn luyện \ncá nhân",
    description:
      "Các khóa huấn luyện được thế kế đế giúp bạn thay đổi tư duy, khơi mở tầm nhìn và tìm thấy được những chiến lược, ý tưởng phù hợp cho thương hiệu và doanh nghiệp của bạn.",
    image: "/images/home/training-1.jpg",
    deco: "/images/home/deco-training-1.svg",
  },
  {
    title: "Huấn luyện \ndoanh nghiệp",
    description:
      "Chương trình huấn luyện bám sát thực tế công ty, giúp nâng cao năng lực tư duy, tiếp thêm cảm hứng cho nhân viên các phòng ban, từ đó cùng nhau tạo ra ý tưởng, giải pháp cho doanh nghiệp.",
    image: "/images/home/training-2.jpg",
    deco: "/images/home/deco-training-2.svg",
  },
  {
    title: "Huấn luyện \ntheo yêu cầu",
    description:
      "Tuỳ vào đặc điểm, thách thức và mục tiêu mà doanh nghiệp đang có, từ việc tái định vị thương hiệu, phát triển sản phẩm hay phát triển ý tưởng truyền thông, chúng tôi đều có thể thiết kế các giải pháp huấn luyện phù hợp cho bạn.",
    image: "/images/home/training-3.jpg",
    deco: "/images/home/deco-training-3.svg",
  },
];

function SectionHomeTraining({ data = [], ...props }: any) {
  const router = useRouter();

  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width > 992) {
        setTimeout(() => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".listTraining",
                start: "top 60%",
              },
            })
            .fromTo(
              ".itemTraining",
              { x: -150, autoAlpha: 0 },
              { x: 0, autoAlpha: 1, stagger: 0.5 }
            );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".itemTraining1",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".itemTraining1", { y: 0 }, { y: -40 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".itemTraining0",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".itemTraining0", { y: 0 }, { y: 40 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".itemTraining2",
                start: "top center",
                end: "bottom center",
                scrub: 3,
              },
            })
            .fromTo(".itemTraining2", { y: 0 }, { y: 40 });
        }, 1500);
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".listTraining",
              start: "top 60%",
            },
          })
          .fromTo(
            ".itemTraining",
            { x: -150, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, stagger: 0.5 }
          );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".itemTraining1",
              start: "top center",
              end: "bottom center",
              scrub: 3,
            },
          })
          .fromTo(".itemTraining1", { y: 0 }, { y: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".itemTraining0",
              start: "top center",
              end: "bottom center",
              scrub: 3,
            },
          })
          .fromTo(".itemTraining0", { y: 0 }, { y: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".itemTraining2",
              start: "top center",
              end: "bottom center",
              scrub: 3,
            },
          })
          .fromTo(".itemTraining2", { y: 0 }, { y: 0 });
      }
    }

    ScrollTrigger.refresh();
  }, [width]);

  return (
    <>
      <div
        className={`SectionHomeTraining mb-[140px] tl-l:mb-[80px] tl-p:mb-[50px]`}
      >
        <div className="cusContainer">
          <h3 className="text-[92px] text-greenDark text-center mb-[50px] tl-p:text-[64px] mb:text-[52px] fadeUp">
            Dịch vụ chính
          </h3>

          <div className="listTraining flex flex-wrap mx-[-8px]">
            {data.length > 0
              ? data.map((e: any, i: number) => (
                  <div
                    className={`
                    itemTraining itemTraining${i} group relative w-1/3 px-[8px]
                    tl-p:w-full tl-p:mb-[20px]
                    ${i == 1 ? "mt-[40px] tl-p:mt-0" : ""}
                    `}
                    key={i}
                  >
                    <div className="relative">
                      <div className="image relative rounded-[50px] mb:rounded-[30px] overflow-hidden">
                        <div className="aspect-[455/585] tl-p:aspect-[380/484]"></div>
                        <img
                          src={e.image}
                          alt=""
                          className="absImg duration-300 rounded-[50px] mb:rounded-[30px] group-hover:dt-l-min:scale-[1.05]"
                        />
                      </div>

                      <div className="content absolute w-full left-0 top-1/2 -translate-y-1/2 px-[20px]">
                        <img
                          src={e.deco}
                          alt=""
                          className={`
                          hidden max-w-[90px] mb-[30px]
                          mb:block
                          `}
                        />
                        <h3 className="text-white whitespace-pre-wrap text-[64px] mb-[10px] tl-l:text-[42px]">
                          {e.title}
                        </h3>
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{
                            __html: e.description,
                          }}
                        />
                      </div>

                      <img
                        src={e.deco}
                        alt=""
                        className={`
                        itemTrainingDeco${i}
                        absolute left-[20px] max-w-[146px]
                        tl-l:max-w-[100px] tl-p:max-w-[75px]
                        mb:hidden
                        ${
                          i == 1
                            ? "bottom-[-40px] tl-p:top-[20px]"
                            : "top-[-40px] tl-p:top-[20px]"
                        }
                      `}
                      />
                    </div>
                  </div>
                ))
              : listTraining.map((e: any, i: number) => (
                  <div
                    className={`
                    itemTraining itemTraining${i} group relative w-1/3 px-[8px]
                    tl-p:w-full tl-p:mb-[20px]
                    ${i == 1 ? "mt-[40px] tl-p:mt-0" : ""}
                    `}
                    key={i}
                  >
                    <div className="relative">
                      <div className="image relative rounded-[50px] mb:rounded-[30px] overflow-hidden">
                        <div className="aspect-[455/585] tl-p:aspect-[380/484]"></div>
                        <img
                          src={e.image}
                          alt=""
                          className="absImg duration-300 rounded-[50px] mb:rounded-[30px] group-hover:dt-l-min:scale-[1.05]"
                        />
                      </div>

                      <div className="content absolute w-full left-0 top-1/2 -translate-y-1/2 px-[20px]">
                        <img
                          src={e.deco}
                          alt=""
                          className={`
                          hidden max-w-[90px] mb-[30px]
                          mb:block
                          `}
                        />
                        <h3 className="text-white whitespace-pre-wrap text-[64px] mb-[10px] tl-l:text-[42px]">
                          {e.title}
                        </h3>
                        <p className="text-white">{e.description}</p>
                      </div>

                      <img
                        src={e.deco}
                        alt=""
                        className={`
                        itemTrainingDeco${i}
                        absolute left-[20px] max-w-[146px]
                        tl-l:max-w-[100px] tl-p:max-w-[75px]
                        mb:hidden
                        ${
                          i == 1
                            ? "bottom-[-40px] tl-p:top-[20px]"
                            : "top-[-40px] tl-p:top-[20px]"
                        }
                      `}
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeTraining);
