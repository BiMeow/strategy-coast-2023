import { useRouter } from "next/router";
import { memo } from "react";

function Footer({ isHome = true, ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Footer ${isHome ? "text-greenDark" : "text-green"}`}>
        <div className="cusContainer">
          <div className="getInTouch flex flex-col items-center justify-center mb-[220px]">
            <h2 className="font-FirsNeueMedium text-[120px] text-center mb-[25px]">
              Bạn đã sẵn sàng?
            </h2>
            <button className={`${isHome ? "btnMain" : "btnMainGreen"}`}>
              Liên hệ chúng tôi
            </button>
          </div>

          <div className="contactInfo mb-[30px]">
            <div className="flex justify-between">
              <div className="font-FirsNeueMedium">
                <p>
                  Hotline: <a href="tel: 0969873300">0969873300</a> (Mr. Sang)
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto: hello@strategycoast.vn">
                    hello@strategycoast.vn
                  </a>
                </p>
              </div>
              <div className="font-FirsNeueMedium text-right">
                <p>
                  StrategyCoast® -{" "}
                  <span className="font-FirsNeue text-[12px]">
                    Strategy that Inspires
                  </span>
                </p>
                <p>
                  28 Thảo Điền, P. Thảo Điền, Q. 2, Tp. Thủ Đức, Hồ Chí Minh
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
            <div className="flex justify-between">
              <div className="font-FirsNeueMedium">
                <p>Copyright 2023 © StrategyCoast®</p>
              </div>
              <div className="font-FirsNeueMedium text-right">
                <p>
                  <a href="#">facebook</a> / <a href="#">instagram</a> /
                  <a href="#">linkedin</a>
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
