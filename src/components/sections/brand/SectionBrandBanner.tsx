import { useRouter } from "next/router";
import { memo } from "react";

function SectionBrandBanner({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionBrandBanner`}>
        <div className="cusContainer">
          <div className="relative rounded-[50px] overflow-hidden w-full h-[calc(100vh-40px)] mb:h-[calc(100vh-20px)]">
            <img src="/images/brand/banner.jpg" alt="" className="absImg" />

            <div className="content w-full max-w-[950px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="uppercase text-[32px] leading-[1] mb-[10px] text-white text-center mb:text-[28px]">
                Chương trình huấn luyện
              </p>
              <h1 className="text-[64px] text-white text-center leading-[1] mb-[10px] mb:text-[55px]">
                Brand Growth Retreat®
              </h1>
              <p className="text-[32px] text-white text-center leading-[1] mb-[30px] mb:text-[28px]">
                Tăng trưởng thương hiệu
              </p>
              <div className="flex justify-center">
                <button className="btnMainGreen">Đăng ký ghi danh</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionBrandBanner);
