import { IconArrow } from "@/components/elements/Icon";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionHomeAbout({ data, ...props }: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".homeAboutDeco1",
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
          },
        })
        .fromTo(".homeAboutDeco1", { x: 0 }, { x: -200 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".homeAboutDeco2",
            start: "top bottom",
            end: "bottom top",
            scrub: 3,
          },
        })
        .fromTo(".homeAboutDeco2", { x: 0 }, { x: 200 });
    }, 800);
  }, []);

  return (
    <>
      <div className={`SectionHomeAbout mb-[120px] tl-p:mb-[90px]`}>
        <div className="cusContainer">
          <h2 className="text-[63px] mb-[75px] tl-l:text-[64px] mb:text-[32px] mb:mb-[30px] fadeUp whitespace-pre-wrap">
            {data?.title || (
              <span>
                Strategy - chiến lược / Coast - bờ biển.
                <br />
                StrategyCoast® là nơi chúng tôi coach về strategy, và cũng là
                một nơi “cực chill” để khai mở tầm nhìn và cảm hứng sáng tạo.
              </span>
            )}
          </h2>
        </div>

        <div className="cusContainer relative flex flex-wrap items-center -mx-[10px] mb:mx-0">
          <div className="c1 w-[42%] px-[10px] mb:px-0 relative z-10 tl-l:w-full tl-l:mb-[16px]">
            <div className="story pl-[55px] pr-[80px] pt-[60px] pb-[150px] bg-greenDark rounded-[50px] mb:rounded-[30px] mb-[16px] mb:p-[30px] fadeRight">
              <h3 className="text-[64px] text-green mb-[35px] mb:text-[42px]">
                {data?.story?.title || (
                  <span>
                    Câu chuyện <br className="hidden mb:block" /> của chúng tôi
                  </span>
                )}
              </h3>

              <div className="text-white text-[18px] mb:text-[16px]">
                {data?.story?.description ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.story?.description,
                    }}
                  />
                ) : (
                  <p>
                    Sau nhiều năm làm công việc tiếp thị, hoạch định và sáng tạo
                    tại các tập đoàn lớn, chúng tôi nhận thấy rằng cách hiệu quả
                    nhất để có được những ý tưởng xuất phát từ sự thấu hiểu
                    chính mình và quá trình hợp tác nhiều cảm hứng giữa các
                    thành viên.
                    <br />
                    <br />
                    Chúng tôi tự hỏi, tạo sao không bắt đầu quá trình hoạch định
                    chiến lược và sáng tạo đó bằng cách tập hợp nhau lại, đặt
                    câu hỏi để hiểu chính mình, khơi gợi tư duy bằng phương pháp
                    huấn luyện truyền cảm hứng và từ đó cùng nhau tìm ra những ý
                    tưởng hiệu quả.
                    <br />
                    <br />
                    StrategyCoast® ra đời với tầm nhìn trở thành nơi tạo ra sự
                    khai mở, cảm hứng và sáng tạo hiệu quả.
                  </p>
                )}
              </div>
            </div>

            <div className="relative rounded-[50px] mb:rounded-[30px] mb-[20px] overflow-hidden hidden tl-l:block fadeUp">
              <img src="/images/home/about-1.jpg" alt="" className="absImg" />

              <div className="relative content py-[30px] px-[30px] text-white">
                <h3 className="text-[42px] text-white mb-[20px]">
                  {data?.value?.title || (
                    <span>Chúng tôi mang đến cho bạn những gì?</span>
                  )}
                </h3>

                <div className="mb-[100px]">
                  {data?.value?.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.value?.description,
                      }}
                    />
                  ) : (
                    <p>
                      Nếu bạn đang trăn trở nâng cao năng lực của chính mình hay
                      đội ngũ nhân viên, tìm kiếm giải pháp tăng trưởng thương
                      hiệu, đau đầu với việc tìm ra ý tưởng truyền thông hay sản
                      phẩm mới, chúng tôi sẽ giúp bạn thiết kế giải pháp huấn
                      luyện và hội thảo phù hợp.
                      <br /> <br />
                      Chúng tôi, những huấn luyện viên với kinh nghiệm phù hợp,
                      nền tảng lý thuyết vững chắc và thực tiễn, kết hợp cùng
                      phương pháp huấn luyện thể nghiệm tư duy truyền cảm hứng®,
                      hy vọng sẽ cùng bạn tìm ra được những giải pháp chiến lược
                      và sáng tạo hiệu quả cho thương hiệu của mình.
                    </p>
                  )}
                </div>

                <p className="text-[32px] font-FirsNeueMedium mb-[25px]">
                  {data?.value?.subtitle || (
                    <span> Thể nghiệm tư duy truyền cảm hứng®</span>
                  )}
                </p>

                <div className="text-[20px] font-FirsNeueMedium">
                  {data?.value?.shortDescription ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.value?.shortDescription,
                      }}
                    />
                  ) : (
                    <p>
                      Hơn cả chương trình đào tạo hay tư vấn, chúng tôi giúp bạn
                      phát triển tư duy, khai mở tầm nhìn và tìm ra giải pháp
                      thông qua quá trình huấn luyện & hội thảo.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="course fadeLeft">
              <div className="group relative px-[50px] pt-[75px] pb-[150px] bg-[#12DE00] rounded-[50px] mb:rounded-[30px] duration-500 mb:px-[30px] hover:bg-greenDark mb:p-[30px]">
                <h4 className="uppercase text-[18px] tracking-[2px] mb-[30px] duration-300 group-hover:text-green">
                  {data?.course?.title || <span>KHÓA ĐẶC BIỆT</span>}
                </h4>

                <h3 className="text-[64px] text-greenDark mb-[25px] mb:text-[42px] duration-300 group-hover:text-green">
                  {data?.course?.name || <span>Brand Growth Retreat®</span>}
                </h3>

                <p className="text-[32px] duration-300 group-hover:text-green mb:mb-[30px]">
                  {data?.course?.description || (
                    <span>Chương trình huấn luyện Tăng trưởng thương hiệu</span>
                  )}
                </p>

                <div className="icon absolute bottom-[50px] right-[50px] duration-300 group-hover:translate-x-[5px] group-hover:fill-green mb:relative mb:top-0 mb:left-0 mb:flex mb:justify-end">
                  <IconArrow />
                </div>

                <Link href={"/BrandGrowthRetreat"} className="absImg"></Link>
              </div>
            </div>
          </div>

          <div className="c2 w-[58%] px-[10px] mb:px-0 relative z-10 tl-l:w-full tl-l:hidden">
            <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden fadeUp">
              <div className="aspect-[800/940] dt-exl:aspect-[800/600]"></div>

              <img src="/images/home/about-1.jpg" alt="" className="absImg" />

              <div className="content absolute z-10 w-full h-full top-0 left-0 pt-[130px] px-[70px] mb:px-[30px]">
                <h3 className="text-[64px] text-white mb-[70px] mb:text-[42px]">
                  {data?.value?.title || (
                    <span>Chúng tôi mang đến cho bạn những gì?</span>
                  )}
                </h3>

                <div className="flex mx-[-25px] text-white">
                  <div className="c1 w-[36%] px-[25px]">
                    <p className="font-FirsNeueMedium text-[32px] mb-[20px]">
                      {data?.value?.subtitle || (
                        <span> Thể nghiệm tư duy truyền cảm hứng®</span>
                      )}
                    </p>

                    <div className="text-[20px] font-FirsNeueMedium pr-[15px]">
                      {data?.value?.shortDescription ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.value?.shortDescription,
                          }}
                        />
                      ) : (
                        <p>
                          Hơn cả chương trình đào tạo hay tư vấn, chúng tôi giúp
                          bạn phát triển tư duy, khai mở tầm nhìn và tìm ra giải
                          pháp thông qua quá trình huấn luyện & hội thảo.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="c2 w-[64%] px-[25px]">
                    {data?.value?.description ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.value?.description,
                        }}
                      />
                    ) : (
                      <p>
                        Nếu bạn đang trăn trở nâng cao năng lực của chính mình
                        hay đội ngũ nhân viên, tìm kiếm giải pháp tăng trưởng
                        thương hiệu, đau đầu với việc tìm ra ý tưởng truyền
                        thông hay sản phẩm mới, chúng tôi sẽ giúp bạn thiết kế
                        giải pháp huấn luyện và hội thảo phù hợp.
                        <br /> <br />
                        Chúng tôi, những huấn luyện viên với kinh nghiệm phù
                        hợp, nền tảng lý thuyết vững chắc và thực tiễn, kết hợp
                        cùng phương pháp huấn luyện thể nghiệm tư duy truyền cảm
                        hứng®, hy vọng sẽ cùng bạn tìm ra được những giải pháp
                        chiến lược và sáng tạo hiệu quả cho thương hiệu của
                        mình.
                      </p>
                    )}
                  </div>
                </div>

                {/* <div className="grid grid-cols-[36%_64%] mx-[-25px] text-white gap-y-[25px]">
                  <p className="font-FirsNeueMedium text-[32px] px-[25px]">
                    Thể nghiệm tư duy truyền cảm hứng®
                  </p>
                  <p className="px-[25px]">
                    Nếu bạn đang trăn trở nâng cao năng lực của chính mình hay
                    đội ngũ nhân viên, tìm kiếm giải pháp tăng trưởng thương
                    hiệu, đau đầu với việc tìm ra ý tưởng truyền thông hay sản
                    phẩm mới, chúng tôi sẽ giúp bạn thiết kế giải pháp huấn
                    luyện và hội thảo phù hợp.
                  </p>
                  <p className="text-[20px] font-FirsNeueMedium px-[25px] pr-[45px]">
                    Hơn cả chương trình đào tạo hay tư vấn, chúng tôi giúp bạn
                    phát triển tư duy, khai mở tầm nhìn và tìm ra giải pháp
                    thông qua quá trình huấn luyện & hội thảo.
                  </p>
                  <p className="px-[25px]">
                    Chúng tôi, những huấn luyện viên với kinh nghiệm phù hợp,
                    nền tảng lý thuyết vững chắc và thực tiễn, kết hợp cùng
                    phương pháp huấn luyện thể nghiệm tư duy truyền cảm hứng®,
                    hy vọng sẽ cùng bạn tìm ra được những giải pháp chiến lược
                    và sáng tạo hiệu quả cho thương hiệu của mình.
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <img
            src="/images/home/deco-wave.png"
            alt=""
            className="homeAboutDeco1 absolute top-[30px] left-0 w-[calc(100%+200px)] max-w-none max-h-[500px] object-fill"
          />

          <img
            src="/images/home/deco-wave.png"
            alt=""
            className="homeAboutDeco2 absolute bottom-[-55px] right-0 w-[calc(100%+200px)] max-w-none max-h-[500px] object-fill"
          />
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeAbout);
