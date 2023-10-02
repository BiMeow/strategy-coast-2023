import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listCoachLocal = [
  {
    name: "Coach. Hồ Công Hoài Phương",
    description: `15+ năm kinh nghiệm trong ngành quảng cáo ở nhiều vai trò, 10+ kinh nghiệm huấn luyện và giảng dạy. Từng làm việc tại Lowe Vietnam, Dentsu, Pencil Group và hiện là đồng sáng lập công ty quảng cáo the.Partners. Anh cũng là tác giả cuốn sách “Quảng cáo không nói láo" xuất bản năm 2018.`,
    image: "/images/brand/coach-1.jpg",
  },
  {
    name: "Coach. Trần Thanh Lâm",
    description: `10+ năm kinh nghiệm. Anh hiện là Strategy Director tại MullenLowe Mishra, từng công tác tại Dentsu, Ogilvy, DSquare và Leo Burnett. Anh đã có kinh nghiệm huấn luyện, giảng dạy trên 3 năm. Anh là nhà sáng lập của CLB những chiến lược gia Củ khoai tây - cộng đồng Chiến lược Thương hiệu lớn nhất tại Việt Nam. Anh cũng là tác giả cuốn sách “What the heck is Insight & How to find it?”. Anh từng đại diện Việt Nam tại các cuộc thi Sáng tạo hàng đầu thế giới, như New York Festival Torch Awards và Adfest Young Lotus.`,
    image: "/images/brand/coach-2.jpg",
  },
  {
    name: "Coach. Nguyễn Như Thạch Trúc",
    description: `10+ năm kinh nghiệm. Chị là cựu Senior Brand Manager tại Vinamilk. Chị đã từng đạt được nhiều thành tích trong các hoạt động liên quan đến lĩnh vực marketing như chung kết cuộc thi Vietnam Young Lions 2017, Vinamilk Employee Of The Year 2018, và tham dự Spikes Asia 2019.`,
    image: "/images/brand/coach-3.jpg",
  },
];

function SectionBrandMoreInfo({ data, listCoach = [], ...props }: any) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".listCoach",
            start: "top 60%",
          },
        })
        .fromTo(
          ".itemCoach",
          { y: 150, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.5 }
        );
    }, 1500);
  }, []);

  return (
    <>
      <div className={`SectionBrandMoreInfo mb-[135px] mb:mb-0`}>
        <div className="cusContainer">
          <div className="relative flex items-center -mx-[10px] mb-[90px] mb:mb-[40px]">
            <div className="c1 w-[42%] px-[10px] relative z-10 tl-l:w-full">
              <div className="who pl-[55px] pr-[60px] py-[100px] bg-green rounded-[50px] mb:rounded-[30px] mb-[16px] mb:p-[30px] fadeRight">
                <h3 className="text-[56px] text-black mb-[35px] mb:text-[32px] mb:mb-[20px]">
                  {data?.target?.title || "Chương trình này dành cho ai?"}
                </h3>

                <div className="text-greenDark pr-[20px] tl-l:pr-0">
                  {data?.target?.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.target?.description,
                      }}
                    />
                  ) : (
                    <p>
                      Marketers đã đi làm trên 2 năm kinh nghiệm. Cần góc nhìn
                      Tư duy chiến lược và cách để tăng trưởng Thương hiệu thực
                      tiễn.
                      <br />
                      <br />
                      Anh chị với chuyên môn khác, mới được đề bạt hay đã nắm
                      giữ công việc Marketing của công ty. Cần khoá học cấp tốc
                      để hiểu và tư duy Tăng trưởng Thương hiệu một cách chiến
                      lược.
                      <br />
                      <br />
                      Chủ và Giám đốc doanh nghiệp SMEs. Cần hiểu để tư duy và
                      quản lý Thương hiệu của mình.
                      <br />
                      <br />
                      Creative, Account, Planner, Digital Planner của Agency
                      trên 2 năm kinh nghiệm. Cần góc nhìn chiến lược toàn diện
                      khi phát triển Thương hiệu cho Khách hàng.
                      <br />
                      <br />
                      Đội nhóm của Công ty. Cần góc nhìn Tăng trưởng Thương hiệu
                      để cùng nói chung một ngôn ngữ và chia sẻ tầm nhìn, kế
                      hoạch hành động cùng nhau.
                    </p>
                  )}
                </div>
              </div>

              <div className="relative rounded-[50px] mb:rounded-[30px] mb-[20px] overflow-hidden hidden tl-l:block fadeUp">
                <img src="/images/home/about-1.jpg" alt="" className="absImg" />

                <div className="relative content py-[30px] px-[30px] text-white">
                  <p className="text-[18px] uppercase tracking-[3px] mb-[15px] text-white mb:text-[14px]">
                    Phương pháp huấn luyện.
                  </p>

                  <h3 className="text-[42px] text-white mb-[20px] mb:text-[32px]">
                    Thể nghiệm tư duy truyền cảm hứng®
                  </h3>

                  <p className="text-[20px] mb-[40px] mb:text-[16px]">
                    Chúng tôi giúp bạn{" "}
                    <span className="font-FirsNeueMedium">KHAI MỞ</span> con
                    đường tăng trưởng thương hiệu riêng của mình, bằng cách tạo
                    ra một Trải nghiệm tràn đầy cảm hứng qua phương pháp Thể
                    nghiệm tư duy®.
                  </p>

                  <p className="">
                    “Thể nghiệm” tức là thể hiện ra thực tế và tự nghiệm ra đúng
                    sai. Thay vì dạy kiến thức một chiều, Thể nghiệm tư duy® cho
                    bạn khoảng không gian thể hiện tư duy, quan điểm và tự
                    nghiệm ra con đường phù hợp nhất cho riêng thương hiệu của
                    mình.
                    <br />
                    <br />
                    Phương pháp này gợi mở bạn bằng những câu hỏi hay, truyền
                    cảm hứng với các Case study đa dạng, đúc kết bằng những mô
                    hình lý thuyết thực tiễn cao, và cho bạn chiêm nghiệm lại
                    qua việc ứng dụng vào thách thức thực tế.
                  </p>
                </div>
              </div>

              <div className="benefit relative px-[60px] pt-[60px] pb-[80px] bg-[#12DE00] rounded-[50px] mb:rounded-[30px] mb:p-[30px] fadeLeft">
                <h3 className="text-[56px] text-greenDark mb-[25px] mb:text-[32px]">
                  {data?.knowledge?.title ||
                    "Bạn nhận được gì từ khóa huấn luyện?"}
                </h3>

                <div className="">
                  {data?.knowledge?.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.knowledge?.description,
                      }}
                    />
                  ) : (
                    <ul>
                      <li>
                        Trải nghiệm truyền cảm hứng, kích thích tư duy và sự
                        sáng tạo để bạn ứng dụng ngay vào công việc hằng ngày
                      </li>
                      <li>
                        Nền tảng Tăng trưởng thương hiệu- gốc rễ để bạn có thể
                        vững vàng trước sự quá tải thông tin, kiến thức khắp nơi
                      </li>
                      <li>
                        Khả năng Tư duy độc lập, đặt câu hỏi và giải quyết vấn
                        đề độc lập
                      </li>
                      <li>Bộ khung thực tiễn có thể áp dụng ngay</li>
                      <li>
                        Kết nối với những Doanh chủ, Marketers từ đa dạng ngành
                        nghề khác nhau
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="c2 w-[58%] px-[10px] relative z-10 tl-l:hidden">
              <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden fadeUp">
                <div className="aspect-[800/940] dt-exl:aspect-[800/600]"></div>

                <img src="/images/home/about-1.jpg" alt="" className="absImg" />

                <div className="content absolute z-10 w-full h-full top-0 left-0 pt-[165px] px-[70px] pr-[90px]">
                  <p className="text-[18px] uppercase tracking-[3px] mb-[30px] text-white">
                    {data?.method?.subtitle || "Phương pháp huấn luyện."}
                  </p>

                  <h3 className="text-[64px] text-white mb-[70px]">
                    {data?.method?.title ||
                      "Thể nghiệm tư duy truyền cảm hứng®"}
                  </h3>

                  <div className="grid grid-cols-[36%_64%] mx-[-35px] text-white gap-y-[25px]">
                    <div className=" text-[20px] px-[35px]">
                      {data?.method?.shortDescription ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.method?.shortDescription,
                          }}
                        />
                      ) : (
                        <p>
                          Chúng tôi giúp bạn{" "}
                          <span className="font-FirsNeueMedium">KHAI MỞ</span>{" "}
                          con đường tăng trưởng thương hiệu riêng của mình, bằng
                          cách tạo ra một Trải nghiệm tràn đầy cảm hứng qua
                          phương pháp Thể nghiệm tư duy®.
                        </p>
                      )}
                    </div>
                    <div className="px-[35px] pr-[36px]">
                      {data?.method?.description ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.method?.description,
                          }}
                        />
                      ) : (
                        <p>
                          “Thể nghiệm” tức là thể hiện ra thực tế và tự nghiệm
                          ra đúng sai. Thay vì dạy kiến thức một chiều, Thể
                          nghiệm tư duy® cho bạn khoảng không gian thể hiện tư
                          duy, quan điểm và tự nghiệm ra con đường phù hợp nhất
                          cho riêng thương hiệu của mình.
                          <br />
                          <br />
                          Phương pháp này gợi mở bạn bằng những câu hỏi hay,
                          truyền cảm hứng với các Case study đa dạng, đúc kết
                          bằng những mô hình lý thuyết thực tiễn cao, và cho bạn
                          chiêm nghiệm lại qua việc ứng dụng vào thách thức thực
                          tế.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[990px] mx-auto">
            <h2 className="text-[70px] text-green text-center mb-[90px] mb:text-[32px] mb:mb-[40px] fadeUp">
              Chuyên gia huấn luyện
            </h2>
            <div className="listCoach w-full flex flex-wrap mx-[-25px] mb:mx-0">
              {listCoach.length > 0
                ? listCoach.map((e: any, i: number) => (
                    <div
                      className="itemCoach w-1/3 px-[25px] text-white text-center mb:w-full mb:mb-[75px] mb-px-0"
                      key={i}
                    >
                      <div className="image relative rounded-full overflow-hidden mb-[25px]">
                        <div className="aspect-1"></div>
                        <img src={e.image} alt="" className="absImg" />
                      </div>

                      <h3 className="text-[18px] tl-p:text-[16px]">{e.name}</h3>
                      <p className="text-[48px] text-green">+</p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e.description,
                        }}
                      />
                    </div>
                  ))
                : listCoachLocal.map((e: any, i: number) => (
                    <div
                      className="itemCoach w-1/3 px-[25px] text-white text-center mb:w-full mb:mb-[75px] mb-px-0"
                      key={i}
                    >
                      <div className="image relative rounded-full overflow-hidden mb-[25px]">
                        <div className="aspect-1"></div>
                        <img src={e.image} alt="" className="absImg" />
                      </div>

                      <h3 className="text-[18px] tl-p:text-[16px]">{e.name}</h3>
                      <p className="text-[48px] text-green">+</p>
                      <p>{e.description}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          ul {
            list-style: disc;
            padding-left: 20px;
          }

          li {
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  );
}

export default memo(SectionBrandMoreInfo);
