import { memo } from "react";

let listCourse = [
  {
    title: "STRATEGIC THINKING FRAMEWORK",
    desc: "Nền tảng của chiến lược",
    content: (
      <>
        <ul className="list-disc pl-[20px]">
          <li>Nắm tổng quát: thế nào là chiến lược?</li>
          <li>Để phát triển tư duy chiến lược, phải làm gì?</li>
        </ul>
      </>
    ),
  },
  {
    title: "INTENT & ISSUE",
    desc: "Khởi đầu của mọi chiến lược: mục tiêu và thách thức ",
    content: (
      <p>
        Đào sâu về Thách thức thật sự mà ta cần tập trung nguồn lực để giải
        quyết
      </p>
    ),
  },
  {
    title: "INSIGHT",
    desc: "Insight là gì? Brand Insight & Consumer/ Cultural Insight?",
    content: (
      <>
        <ul className="list-disc pl-[20px]">
          <li>Hiểu định nghĩa, cách tìm</li>
          <li>Khai mở góc nhìn đa dạng về Insight</li>
        </ul>
      </>
    ),
  },
  {
    title: "IDEA",
    desc: "Ý tưởng và Cách đánh giá ý tưởng",
    content: (
      <p>
        Biết cách sản xuất ý tưởng, đánh giá ý tưởng và quản trị tinh thần sáng
        tạo
      </p>
    ),
  },
  {
    title: "WORKSHOP",
    desc: "Thực hành giải case",
    content: <p>Ứng dụng những bộ khung, tư duy được học</p>,
  },
];

function SectionThinkCourse({ ...props }) {
  return (
    <>
      <div className={`SectionThinkCourse secSpacing`}>
        <div className="cusContainer">
          <h2 className="fadeUp text-[70px] text-green text-center tl-l:text-[60px] tl-p:text-[50px] mb:text-[30px] mb-[65px] mb:mb-[30px]">
            Chương trình huấn luyện
          </h2>
          <div className="listCourse fadeUp p-[40px] rounded-[50px] border-4 border-green mb-[90px]">
            <div className="heading pb-[20px] border-b border-[#FFFFFF33] flex flex-wrap mb-[50px] mb:hidden">
              <div className="c1 w-1/2">
                <p className="text-[24px] text-green uppercase mb:text-[20px] leading-[1]">
                  CHỦ ĐỀ
                </p>
              </div>
              <div className="c1 w-1/2 pl-[30px]">
                <p className="text-[24px] text-green uppercase mb:text-[20px] leading-[1]">
                  GIẢI QUYẾT VẤN ĐỀ GÌ?
                </p>
              </div>
            </div>
            <div className="list space-y-[50px]">
              {listCourse.map((e: any, i: number) => (
                <div className="itemCourse flex flex-wrap" key={i}>
                  <div className="c1 w-1/2 flex mb:w-full mb:mb-[20px] mb:flex-col">
                    <p className="text-[38px] text-green uppercase mb:text-[20px] mr-[20px] mb:mb-[10px]">
                      0{i + 1}.
                    </p>
                    <div>
                      <p className="text-[38px] text-green uppercase mb:text-[20px] mb-[10px]">
                        {e.title}
                      </p>
                      <p className="text-white">{e.desc}</p>
                    </div>
                  </div>
                  <div className="c1 w-1/2 pl-[30px] mb:w-full mb:pl-0">
                    <div className="text-[20px] text-white mb:text-[18px]">
                      {e.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] bg-green border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-greenDark gap-y-[20px]">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  Phí huấn luyện:
                </p>
                <p>(Đã bao gồm VAT)</p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px] mb:mb-[20px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium">EarlyBird</p>
                    <p>
                      (Trước ngày 20/11/2024 - Áp dụng tối đa cho 10 học viên
                      đầu tiên)
                    </p>
                  </div>
                  <p className="text-[28px] font-FirsNeueBold">5,000,000đ</p>
                </div>
              </div>

              <div className="c3 w-[30%] mb-[25px] mb:w-full px-[30px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium">Regular</p>
                    <p className="opacity-0">BiMeow</p>
                  </div>
                  <p className="text-[28px] font-FirsNeueBold">6,000,000đ</p>
                </div>
              </div>

              <div className="c4 w-[60%] ml-auto mb:w-full px-[30px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium mb-[10px]">
                      Đăng ký theo nhóm:
                    </p>
                    <p className="text-[17px] font-FirsNeueMedium mb:text-[16px]">{`Nhóm 2 người: -5%, Nhóm 3 người: -10%, Nhóm >4 người: -15%`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionThinkCourse);
