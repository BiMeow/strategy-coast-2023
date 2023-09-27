import { IconArrow } from "@/components/elements/Icon";
import { useRouter } from "next/router";
import { memo } from "react";

let listFeature = [
  {
    title:
      "HỆ THỐNG HOÁ kiến thức, giữa biển thông tin và các \ntư vấn trái ngược nhau ",
  },
  {
    title:
      "Học cách tư duy chiến lược bài bản, khi ta hay bị xao nhãng bởi các vấn đề vận hành và trào lưu ngắn hạn",
  },
  {
    title:
      "TÌM KIẾM CẢM HỨNG sáng tạo cho thương hiệu, khi tầm nhìn bị bó hẹp vì quá gần, quá quen với thương hiệu và ngành hàng của mình",
  },
];

function SectionBrandAbout({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionBrandAbout relative z-10 mt-[-40px] mb-[80px]`}>
        <div className="cusContainer text-green">
          <div className="heading text-center mb-[70px]">
            <h2 className="text-[110px] mb-[20px]">
              RETHINK. REFLECT.
              <br />
              REIMAGINE YOUR BRAND.
            </h2>
            <p className="text-[36px] mb-[30px]">
              Time to get your brand a retreat!
            </p>
            <p className="text-[26px]">
              Một chương trình huấn luyện tràn đầy cảm hứng, dành cho <br /> cá
              nhân và doanh nghiệp cần được HỆ THỐNG HOÁ kiến <br /> thức và
              KHAI MỞ TẦM NHÌN tăng trưởng thương hiệu.
            </p>
          </div>

          <div className="content">
            <div className="image relative rounded-[50px] overflow-hidden">
              <div className="aspect-[1400/675]"></div>
              <img src="/images/brand/about.jpg" alt="" className="absImg" />
            </div>

            <p className="text-[36px] w-[40%] mt-[-165px] mb-[50px] relative z-10">
              Brand Growth Retreat là một hành trình “đưa nhau đi trốn" để suy
              ngẫm về con đường tăng trưởng thương hiệu tại một khu vườn xanh
              giữa Thảo Điền, Q.2.
              <br />
              <br />
              Chương trình diễn ra cô đọng trong 6 buổi, được thiết kế cho các
              anh chị và doanh nghiệp có nhu cầu:
            </p>

            <div className="listFeature flex flex-wrap items-stretch mx-[-8px]">
              {listFeature.map((e: any, i: number) => (
                <div className="itemFeature w-1/3 px-[8px]" key={i}>
                  <div className="content h-full px-[35px] py-[40px] border-4 border-green rounded-[50px]">
                    <p className="text-[110px] leading-[1] max-h-[60px] mb-[20px]">
                      *
                    </p>
                    <p className="text-[28px] whitespace-pre-wrap">{e.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionBrandAbout);
