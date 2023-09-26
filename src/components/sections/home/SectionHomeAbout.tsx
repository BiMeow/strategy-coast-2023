import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { IconArrow } from "@/components/elements/Icon";

function SectionHomeAbout({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeAbout mb-[100px]`}>
        <div className="cusContainer">
          <h2 className="text-[64px] mb-[75px]">
            Strategy - chiến lược / Coast - bờ biển.
            <br />
            StrategyCoast® là nơi chúng tôi coach về strategy, và cũng là một
            nơi “cực chill” để khai mở tầm nhìn và cảm hứng sáng tạo.
          </h2>
        </div>

        <div className="cusContainer relative flex items-center -mx-[10px]">
          <div className="c1 w-[42%] px-[10px] relative z-10">
            <div className="story pl-[55px] pr-[80px] pt-[60px] pb-[150px] bg-greenDark rounded-[50px] mb-[16px]">
              <h3 className="text-[64px] text-green mb-[35px]">
                Câu chuyện của chúng tôi
              </h3>

              <p className="text-white text-[18px] text-justify">
                Sau nhiều năm làm công việc tiếp thị, hoạch định và sáng tạo tại
                các tập đoàn lớn, chúng tôi nhận thấy rằng cách hiệu quả nhất để
                có được những ý tưởng xuất phát từ sự thấu hiểu chính mình và
                quá trình hợp tác nhiều cảm hứng giữa các thành viên.
                <br />
                <br />
                Chúng tôi tự hỏi, tạo sao không bắt đầu quá trình hoạch định
                chiến lược và sáng tạo đó bằng cách tập hợp nhau lại, đặt câu
                hỏi để hiểu chính mình, khơi gợi tư duy bằng phương pháp huấn
                luyện truyền cảm hứng và từ đó cùng nhau tìm ra những ý tưởng
                hiệu quả.
                <br />
                <br />
                StrategyCoast® ra đời với tầm nhìn trở thành một nơi chốn của sự
                khai mở, cảm hứng và sáng tạo hiệu quả.
              </p>
            </div>

            <div className="course relative px-[50px] pt-[75px] pb-[150px] bg-[#12DE00] rounded-[50px]">
              <h4 className="uppercase text-[18px] tracking-[2px] mb-[30px]">
                KHÓA ĐẶC BIỆT
              </h4>

              <h3 className="text-[64px] text-greenDark mb-[25px]">
                Brand Growth Retreat®
              </h3>

              <p className="text-[32px] text-justify">
                Chương trình huấn luyện Tăng trưởng thương hiệu
              </p>

              <div className="icon absolute bottom-[50px] right-[50px]">
                <IconArrow />
              </div>
            </div>
          </div>

          <div className="c2 w-[58%] px-[10px] relative z-10">
            <div className="relative rounded-[50px] overflow-hidden">
              <div className="aspect-[800/940]"></div>
              <img src="/images/home/about-1.jpg" alt="" className="absImg" />
            </div>
          </div>

          <img
            src="/images/home/deco-wave.png"
            alt=""
            className="absolute top-[30px] left-0 w-full"
          />

          <img
            src="/images/home/deco-wave.png"
            alt=""
            className="absolute bottom-[-55px] left-0 w-full"
          />
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeAbout);
