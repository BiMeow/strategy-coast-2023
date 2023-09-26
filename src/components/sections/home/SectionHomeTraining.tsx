import { useRouter } from "next/router";
import { memo } from "react";

let listTraining = [
  {
    title: "Huấn luyện cá nhân",
    description:
      "Các khóa huấn luyện được thế kế đế giúp bạn thay đổi tư duy, khơi mở tầm nhìn và tìm thấy được những chiến lược, ý tưởng phù hợp cho thương hiệu, đoàng nghiệp của mình.",
    image: "/images/home/training-1.jpg",
    deco: "/images/home/deco-training-1.svg",
  },
  {
    title: "Huấn luyện doanh nghiệp",
    description:
      "Chương trình huấn luyện bám sát thực tế công ty, giúp nâng cao năng lực tư duy, tiếp thêm cảm hứng cho nhân viên các phòng ban, từ đó cùng nhau tạo ra ý tưởng, giải pháp cho doanh nghiệp.",
    image: "/images/home/training-2.jpg",
    deco: "/images/home/deco-training-2.svg",
  },
  {
    title: "Huấn luyện theo yêu cầu",
    description:
      "Tuỳ vào đặc điểm, thách thức và mục tiêu mà doanh nghiệp đang có, từ việc tái định vị thương hiệu, phát triển sản phẩm hay phát triển ý tưởng truyền thông, chúng tôi để có thể thiết kế giải pháp huấn luyện phù hợp cho bạn.",
    image: "/images/home/training-3.jpg",
    deco: "/images/home/deco-training-3.svg",
  },
];

function SectionHomeTraining({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeTraining mb-[140px]`}>
        <div className="cusContainer">
          <div className="flex flex-wrap mx-[-8px]">
            {listTraining.map((e: any, i: number) => (
              <div
                className={`
                itemTraining relative w-1/3 px-[8px]
                ${i == 1 ? "mt-[40px]" : ""}
                `}
                key={i}
              >
                <div className="relative">
                  <div className="image relative rounded-[50px] overflow-hidden">
                    <div className="aspect-[455/585]"></div>
                    <img src={e.image} alt="" className="absImg" />
                  </div>

                  <div className="content absolute w-full left-0 top-1/2 -translate-y-1/2 px-[20px]">
                    <h3 className="text-white text-[64px] mb-[10px]">
                      {e.title}
                    </h3>
                    <p className="text-white">{e.description}</p>
                  </div>

                  <img
                    src={e.deco}
                    alt=""
                    className={`
                        absolute left-[20px]
                        ${i == 1 ? "bottom-[-40px]" : "top-[-40px]"}
                      `}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeTraining);
