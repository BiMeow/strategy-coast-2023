import gsap from "gsap";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

function SectionThinkInfo({ ...props }) {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 992) {
      setTimeout(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".thinkInfoImage",
              start: "top 25%",
              end: "bottom top",
              scrub: 2,
            },
          })
          .fromTo(".thinkInfoImage", { y: 0 }, { y: 300 });
      }, 800);
    }
  }, [width]);

  return (
    <>
      <div className={`SectionThinkInfo secSpacing text-green`}>
        <div className="cusContainer text-center whitespace-pre-wrap">
          <h2 className="fadeUp text-[86px] tl-p:text-[64px] mb:text-[40px] mb-[24px]">
            Ai cũng có thể làm <br /> chiến lược
          </h2>
          <p className="fadeUp text-[18px] mb-[40px] mb:text-[16px]">
            {`Một khoá huấn luyện trong 2 ngày, giúp khai mở tư duy chiến lược - tập trung vào\nChiến lược truyền thông sáng tạo. Dành cho các nhân sự làm trong giới Agency và\nClients, đang chưa rõ phải nghĩ thế nào và bắt tay vào làm chiến lược truyền thông\nra sao.`}
          </p>
          <div className="fadeIn">
            <img
              src={"/images/think/info.jpg"}
              alt=""
              className="thinkInfoImage w-full rounded-[50px] relative z-0 mb:mb-[40px] mb:aspect-[3/2] mb:object-cover"
            />
          </div>
          <p className="text-[26px] mb-[40px] mb:text-[18px] relative z-10">
            {`“Sếp hay feedback em bị thiếu strategic thinking”\n\n“Chăm chỉ nhận & viết brief nhưng khi\nteam hỏi Issue là gì thì ú ớ"\n\n“Cứ bị bảo 'Này đâu phải là Insight'”\n\n“Không biết Idea tốt là như thế nào”\n\n“Thiếu ngôn ngữ chiến lược để feedback\nvà thực hiện vai trò tư vấn"\n…v.v.`}
          </p>

          <p className="fadeIn text-[120px] mb-[40px] leading-[1] mb:mb-0">*</p>

          <div className="fadeUp mb-[100px] py-[65px] px-[90px] rounded-[50px] border-4 border-green text-[36px] tl-p:text-[30px] mb:text-[20px] text-left mb:p-[30px] mb:mb-[20px]">
            <p>
              Think like a StrategistTM được thiết kế để giải quyết những trăn
              trở của tất cả ai đang làm trong ngành Tiếp thị, cho cả Brand team
              và Agency. Dù bạn làm ở vị trí gì, Brand team, Account, Creative,
              Media, Digital, thì cũng cần Tư duy chiến lược. Đây là ngôn ngữ
              giao tiếp quan trọng trong suốt quá trình sáng tạo - hoạch định
              truyền thông.
              <br />
              <br />
              Huấn luyện về chiến lược, nhưng đây là một trải nghiệm tràn đầy
              cảm hứng và sáng tạo. Khoá diễn ra cô đọng trong 2 ngày cuối tuần.
            </p>
          </div>

          <div className="relative text-left flex flex-wrap gap-y-[20px] items-center -mx-[10px] mb-[90px] mb:mb-[40px]">
            <div className="c1 w-[42%] px-[10px] relative z-10 tl-l:w-full">
              <div className="who pl-[50px] pr-[60px] py-[90px] bg-green rounded-[50px] mb:rounded-[30px] mb-[20px] mb:p-[30px] fadeRight">
                <h3 className="text-[56px] text-black mb-[35px] mb:text-[32px] mb:mb-[20px]">
                  Chương trình này dành cho ai?
                </h3>

                <div className="text-greenDark pr-[20px] tl-l:pr-0">
                  <p>
                    Nhân sự Agency (Account, Creative, Content, v.v.) muốn tự
                    tin hiểu về chiến lược và tham gia vào quá trình bão não và
                    phát triển chiến lược
                    <br />
                    <br />
                    Nhân sự Clients (marketers, in-house creative, content,
                    v.v.) muốn nắm về chiến lược để có thể tự tay thực hiện hoặc
                    phối hợp cùng agency hiệu quả hơn. 
                    <br />
                    <br />
                    Các bạn trẻ mới bước chân vào ngành, mong muốn có nền tảng
                    tư duy và kĩ năng hoạch định chiến lược truyền thông
                  </p>
                </div>
              </div>

              <div className="benefit relative px-[50px] pt-[60px] pb-[70px] bg-[#12DE00] rounded-[50px] mb:rounded-[30px] mb:p-[30px] fadeLeft">
                <h3 className="text-[56px] text-greenDark mb-[25px] mb:text-[32px]">
                  Bạn nhận được gì từ khóa huấn luyện?
                </h3>

                <ul className="list-disc text-black pl-[20px] space-y-[15px]">
                  <li>
                    Nền tảng và ngôn ngữ thiết yếu để tư duy và thảo luận về
                    chiến lược
                  </li>
                  <li>
                    Khả năng tư duy độc lập để giải quyết mọi vấn đề đa dạng có
                    thể gặp trong thực tế
                  </li>
                  <li>Bộ khung thực tiễn có thể áp dụng ngay</li>
                  <li>
                    Trải nghiệm truyền cảm hứng, kích thích tư duy và sự sáng
                    tạo
                  </li>
                </ul>
              </div>
            </div>

            <div className="c2 w-[58%] px-[10px] relative z-10 tl-l:w-full">
              <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden fadeUp">
                <div className="aspect-[800/940] dt-exl:aspect-[800/600]"></div>

                <img src="/images/think/info-2.jpg" alt="" className="absImg" />

                <div className="content absolute z-10 w-full bottom-0 left-0 py-[65px] px-[60px] text-white">
                  <p className="text-[18px] mb-[30px]">
                    Phương pháp huấn luyện.
                  </p>
                  <h2 className="text-[65px] mb-[45px] tl-l:text-[50px] mb:text-[40px]">
                    “Role play - Đóng vai" và “Giải case"
                  </h2>
                  <p>
                    Để học tốt thì học phải vui, pha trộn “drama". Vậy nên,
                    chúng tôi thiết kế một trải nghiệm học mô phỏng thực tế: đầy
                    sự cạnh tranh, phấn khích và tiếng cười.
                    <br />
                    <br />
                    StrategyCoast ứng dụng phương pháp học “Role play- Đóng vai"
                    và “Giải case". Thay vì dạy kiến thức một chiều, lớp học cho
                    bạn khoảng không gian thể hiện tư duy, quan điểm, và ứng
                    dụng các kiến thức truyền đạt ngay vào tình huống mô phỏng
                    trong lớp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionThinkInfo);
