import { useRouter } from "next/router";
import { memo } from "react";

const listCourse = [
  {
    title: "FUNDAMENTALS OF BRAND GROWTH",
    subTitle: "Nền tảng khoa học về Tăng trưởng thương hiệu",
    description:
      "Nắm được Nguyên Lý khoa học tăng trưởng thương hiệu, bạn có bộ rễ tư duy vững chắc. Giúp bạn sở hữu cách tư duy giải quyết bất kì thách thức tăng trưởng thương hiệu nào.",
  },
  {
    title: "DEFINING THE STRATEGIC SOURCE OF GROWTH",
    subTitle: "Xác định Nguồn tăng trưởng chiến lược ",
    description:
      "Khi biết nguồn tăng trưởng chiến lược, doanh nghiệp có thể tập trung nguồn lực của mình cho một vài ưu tiên, thay vì đầu tư dàn trải.",
  },
  {
    title: "TARGET & NEEDSTATE THINKING",
    subTitle: "Hiểu thấu đối tượng KH thông qua lăng kính Needstate",
    description:
      "Nhìn KH qua lăng kính Needstate là cách nhìn thấu được Lý do mua hàng & sử dụng của KH. Thay vì chỉ dừng ở những miêu tả phổ quát, không mang giá trị ứng dụng.",
  },
  {
    title: "THE ART OF POSITIONING",
    subTitle: "Nghệ thuật Định vị thương hiệu khác biệt và tách biệt",
    description:
      "Khai mở tầm nhìn về Positioning. Positioning cũng có thể sáng tạo và thú vị, không cứng nhắc như phương pháp thông thường",
  },
  {
    title: "BUILDING A BRAND GROWTH STRATEGY",
    subTitle: "Xây dựng 1 chiến lược tăng trưởng thương hiệu",
    description:
      "Kết nối các Nguyên lý đã học thành 1 chuỗi kiến thức xuyên suốt, thực tiễn, có Chiến lược Tăng trưởng thật cho case thật mang về.",
  },
];

function SectionBrandCourseV2({ data, ...props }: any) {
  const router = useRouter();

  return (
    <>
      <div
        className={`SectionBrandCourseV2 mb-[160px] tl-l:mb-[80px] mb:mb-[50px]`}>
        <div className="cusContainer max-w-[1660px] mx-auto">
          <h2 className="text-[70px] text-green text-center mb-[50px] mb:text-[28px] fadeUp">
            Chương trình huấn luyện
          </h2>

          <div className="p-[40px] mb:p-[30px] border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="heading fadeUp pb-[20px] border-b border-[#FFFFFF33] mb-[50px] mb:hidden">
              <div className="flex flex-wrap mx-[-20px] ">
                <div className="c1 w-1/2 mb:w-full px-[20px]">
                  <p className="text-green text-[24px]">CHỦ ĐỀ</p>
                </div>
                <div className="c2 w-1/2 mb:w-full px-[20px]">
                  <p className="text-green text-[24px]">
                    GIẢI QUYẾT VẤN ĐỀ GÌ?
                  </p>
                </div>
              </div>
            </div>
            <div className="content">
              {listCourse.map((e: any, i: any) => (
                <div className="itemCourse mb-[55px] last:mb-0 fadeUp" key={i}>
                  <div className="flex flex-wrap mx-[-20px]">
                    <div className="c1 w-1/2 px-[20px] mb:w-full mb:mb-[20px]">
                      <div className="flex text-green text-[38px] mb:flex-col">
                        <p className="w-[100px] pr-[30px] mb:mb-[20px]">
                          {i + 1 < 10 ? `0${i + 1}.` : `${i + 1}.`}
                        </p>
                        <div>
                          <p className="w-full max-w-[440px] mb-[10px]">
                            {e.title}
                          </p>
                          <p className="text-white text-[18px]">{e.subTitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="c2 w-1/2 mb:w-full px-[20px]">
                      <p className="text-white text-[20px]">{e.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] bg-green border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-greenDark">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  Chi phí khóa học:
                </p>
                <p>(Đã bao gồm VAT)</p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px] mb:mb-[20px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium">
                      Early Bird
                    </p>
                    <p>
                      {data?.earlyBird?.date != "null"
                        ? data?.earlyBird?.date
                        : ""}
                    </p>
                  </div>
                  <p className="text-[28px] font-FirsNeueBold">
                    {data?.earlyBird?.price || "11,500,000đ"}
                  </p>
                </div>
              </div>

              <div className="c3 w-[30%] mb-[25px] mb:w-full px-[30px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium">Regular</p>
                    <p>
                      {data?.regular?.date != "null" ? data?.regular?.date : ""}
                    </p>
                  </div>
                  <p className="text-[28px] font-FirsNeueBold">
                    {data?.regular?.price || "13,000,000đ"}
                  </p>
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

export default memo(SectionBrandCourseV2);
