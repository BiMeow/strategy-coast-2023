import { useRouter } from "next/router";
import { memo } from "react";

function SectionHomeBanner({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeBanner mb-[70px] tl-l:mb-[40px]`}>
        <div className="cusContainer">
          <div className="relative rounded-[50px] mb:rounded-[30px] overflow-hidden w-full h-[calc(100vh-40px)] mb:h-[calc(100vh-20px)]">
            <img src="/images/home/banner.jpg" alt="" className="absImg" />

            <div className="content w-full max-w-[950px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-[92px] text-white text-center mb-[25px] tl-l:text-[64px] mb:text-[48px]">
                Strategy that <br className="hidden mb:block" /> Inspires
              </h1>
              <p className="text-[20px] text-white text-center">
                StrategyCoast® ra đời với tầm <br className="hidden mb:block" />{" "}
                nhìn trở thành nơi của sự <br /> khai mở cảm hứng và sáng tạo{" "}
                <br className="hidden mb:block" />
                hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeBanner);
