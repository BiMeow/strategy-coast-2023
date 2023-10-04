import { useRouter } from "next/router";
import { memo } from "react";

function SectionBrandCourse({ data, ...props }: any) {
  const router = useRouter();

  return (
    <>
      <div
        className={`SectionBrandCourse mb-[160px] tl-l:mb-[80px] mb:mb-[50px]`}
      >
        <div className="cusContainer">
          <h2 className="text-[70px] text-green text-center mb-[50px] mb:text-[28px] fadeUp">
            Chương trình huấn luyện
          </h2>

          <div className="px-[40px] py-[60px] mb:p-[30px] border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-green">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  + Nền tảng
                </p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px]">
                <div className="flex space-x-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      01
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pt-[15px] mb:pt-0">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Issue Diagnosis
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Chẩn đoán Hiện trạng & Rào cản Tăng trưởng của Thương hiệu
                    </p>
                  </div>
                </div>
              </div>

              <div className="c3 w-[30%] mb:w-full px-[30px]">
                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Cách tìm ra Vấn đề cốt lõi ngăn cản{" "}
                    <br className="mb:hidden" /> tiềm năng tăng trưởng của
                    thương hiệu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-green">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  + Chiến lược tăng trưởng
                </p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px] space-y-[45px]">
                <div className="flex flex-wrap">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      02
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pl-[20px] pt-[15px] mb:pt-0 mb-[20px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Segmentation, Targeting & Needstate
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Chọn Phân khúc, hiểu Nhu cầu
                    </p>
                  </div>
                  <div className="w-full hidden mb:block mb:pl-[50px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Bạn học được gì?
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Segmentation & Targeting <br /> Needstate thinking
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      03
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pl-[20px] pt-[15px] mb:pt-0 mb-[20px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Growth through the core
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Tăng trưởng thông qua cốt lõi hiện tại của thương hiệu
                    </p>
                  </div>
                  <div className="w-full hidden mb:block mb:pl-[50px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Bạn học được gì?
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Cốt lõi của thương hiệu <br /> Insight <br /> Positioning
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      04
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pl-[20px] pt-[15px] mb:pt-0 mb-[20px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Growth through stretching
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Tăng trưởng thông qua mở rộng thương hiệu qua các sân chơi
                      mới
                    </p>
                  </div>
                  <div className="w-full hidden mb:block mb:pl-[50px]">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Bạn học được gì?
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Kiến trúc thương hiệu <br /> Quản lý danh mục sản phẩm{" "}
                      <br /> Phát triển sản phẩm mới
                    </p>
                  </div>
                </div>
              </div>

              <div className="c3 w-[30%] mb:w-full px-[30px] space-y-[45px] mb:hidden">
                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Segmentation & Targeting <br /> Needstate thinking
                  </p>
                </div>

                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Cốt lõi của thương hiệu <br /> Insight <br /> Positioning
                  </p>
                </div>

                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Kiến trúc thương hiệu <br /> Quản lý danh mục sản phẩm{" "}
                    <br /> Phát triển sản phẩm mới
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-green">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  + Chiến thuật tăng trưởng
                </p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px]">
                <div className="flex space-x-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      05
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pt-[15px] mb:pt-0">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Trigger new behavior
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Thay đổi, tạo Hành vi mới 
                    </p>
                  </div>
                </div>
              </div>

              <div className="c3 w-[30%] mb:w-full px-[30px]">
                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Khoa học Hành vi trong Marketing <br /> Cách thay đổi, tạo
                    Hành vi mới
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeUp">
            <div className="flex flex-wrap mx-[-30px] text-green">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  + Phản tư
                </p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px]">
                <div className="flex space-x-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full border border-green flex items-center justify-center mb:w-[30px] mb:h-[30px]">
                    <p className="text-[18px] leading-[1] mt-[3px] mb:text-[14px] mb:mt-[2px]">
                      06
                    </p>
                  </div>
                  <div className="w-[calc(100%-45px)] pt-[15px] mb:pt-0">
                    <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                      Reflection
                    </p>
                    <p className="text-[18px] mb:text-[16px] text-white">
                      Đối chiếu & Kết thúc khoá học
                    </p>
                  </div>
                </div>
              </div>

              <div className="c3 w-[30%] mb:w-full px-[30px]">
                <div className="pt-[15px] mb:pl-[50px]">
                  <p className="font-FirsNeueMedium text-[24px] mb:text-[20px] mb-[10px]">
                    Bạn học được gì?
                  </p>
                  <p className="text-[18px] mb:text-[16px] text-white">
                    Thực hành trên bộ Toolkit <br /> Trình bày, Thảo luận, học
                    hỏi lẫn nhau <br /> Tự đối chiếu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[40px] py-[60px] mb:p-[30px] bg-green border-4 border-green rounded-[50px] mb:rounded-[30px] mb-[15px] fadeIn">
            <div className="flex flex-wrap mx-[-30px] text-greenDark">
              <div className="c1 w-[40%] mb:w-full mb-[20px] px-[30px]">
                <p className="text-[38px] tl-l:text-[32px] mb:text-[28px]">
                  Chi phí khóa học:
                </p>
                <p>(Chưa bao gồm VAT)</p>
              </div>

              <div className="c2 w-[30%] mb:w-full px-[30px] mb:mb-[20px]">
                <div className="">
                  <div className="mb-[10px]">
                    <p className="text-[24px] font-FirsNeueMedium">
                      Early Bird
                    </p>
                    <p>{data?.earlyBird?.date || "(trước ngày 9/10/2023)"}</p>
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
                    <p>{data?.regular?.date || "(sau ngày 9/10/2023)"}</p>
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

export default memo(SectionBrandCourse);
