import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

function Footer({ isHome = true, ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Footer ${isHome ? "text-greenDark" : "text-green"}`}>
        <div className="cusContainer">
          <div className="getInTouch flex flex-col items-center justify-center mb-[220px] tl-l:mb-[75px]">
            <h2 className="font-FirsNeueMedium text-[120px] text-center mb-[25px] tl-l:text-[100px] tl-p:text-[80px] mb:text-[38px]">
              Bạn đã sẵn sàng?
            </h2>
            <button className={`${isHome ? "btnMain" : "btnMainGreen"}`}>
              Đăng ký ghi danh
            </button>
          </div>

          <div className="contactInfo mb-[30px] mb:mb-[20px]">
            <div className="flex flex-wrap justify-between">
              <div className="font-FirsNeueMedium mb:w-full">
                <p className="mb:text-center">
                  Hotline: <a href="tel: 0969873300">0969873300</a> (Mr. Sang)
                </p>
                <p className="mb:text-center">
                  Email:{" "}
                  <a href="mailto: hello@strategycoast.vn">
                    hello@strategycoast.vn
                  </a>
                </p>
              </div>
              <div className="font-FirsNeueMedium text-right mb:text-left mb:w-full">
                <p className="mb:text-center">
                  StrategyCoast® -{" "}
                  <span className="font-FirsNeue text-[12px]">
                    Strategy that Inspires
                  </span>
                </p>
                <p className="mb:text-center">
                  28 Thảo Điền, P. Thảo Điền, Q. 2,{" "}
                  <br className="hidden mb:block" /> Tp. Thủ Đức, Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>

          <div
            className={`
            copyright pt-[20px] border-t-4
            ${isHome ? "border-greenDark" : "border-green"}
            `}
          >
            <div className="flex flex-wrap justify-between">
              <div className="font-FirsNeueMedium mb:w-full mb:text-center mb:mb-[20px]">
                <p>Copyright 2023 © StrategyCoast®</p>
              </div>
              <div className="font-FirsNeueMedium text-right mb:w-full mb:text-center">
                <p>
                  <Link href="/#">facebook</Link> / <Link href="/#">instagram</Link> /
                  <Link href="/#">linkedin</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
