import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

let listCoachLocal = [
  {
    name: "Coach. Hồ Công Hoài Phương",
    description: `15+ năm kinh nghiệm trong ngành quảng cáo ở nhiều vai trò, 10+ kinh nghiệm huấn luyện và giảng dạy. Từng làm việc tại Lowe Vietnam, Dentsu, Pencil Group và hiện là đồng sáng lập công ty quảng cáo the.Partners. Anh cũng là tác giả cuốn sách “Quảng cáo không nói láo" xuất bản năm 2018.`,
    image: "/images/think/coach-1.jpg",
  },
  {
    name: "Coach. Trần Thanh Lâm",
    description: `10+ năm kinh nghiệm. Anh hiện là Strategy & Growth Director của DSQuare, từng công tác tại MullenLowe Mishra, Dentsu, Ogilvy và Leo Burnett. Anh đã có kinh nghiệm huấn luyện, giảng dạy trên 3 năm. Anh là nhà sáng lập của CLB những chiến lược gia Củ khoai tây - cộng đồng Chiến lược Thương hiệu lớn nhất tại Việt Nam. Anh cũng là tác giả cuốn sách “What the heck is Insight & How to find it?”. Anh từng đại diện Việt Nam tại các cuộc thi Sáng tạo hàng đầu thế giới, như New York Festival Torch Awards và Adfest Young Lotus.`,
    image: "/images/think/coach-2.jpg",
  },
  {
    name: "Coach.  Khách mời bí mật",
    description: ``,
    image: "/images/think/coach-null.png",
  },
];

function SectionThinkCoach({ ...props }) {
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
    }, 800);
  }, []);

  return (
    <>
      <div className={`SectionThinkCoach secSpacing`}>
        <div className="w-full max-w-[1120px] mx-auto">
          <h2 className="text-[70px] text-green text-center mb-[90px] mb:text-[32px] mb:mb-[40px] fadeUp">
            Chuyên gia huấn luyện
          </h2>
          <div className="listCoach w-full flex flex-wrap mb:mx-0">
            {listCoachLocal.map((e: any, i: number) => (
              <div
                className="itemCoach w-1/3 px-[40px] text-white text-center mb:w-full mb:mb-[75px] mb:last:mb-0"
                key={i}
              >
                <div className="image relative rounded-full overflow-hidden mb-[25px] w-[90%] mx-auto">
                  <div className="aspect-1"></div>
                  <img src={e.image} alt="" className="absImg" />
                </div>

                <h3 className="text-[18px] tl-p:text-[16px] whitespace-pre-wrap">
                  {e.name}
                </h3>
                <p className="text-[48px]">+</p>
                <p className="whitespace-pre-wrap">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionThinkCoach);
