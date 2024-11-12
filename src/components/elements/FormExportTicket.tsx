import { ColorPicker, message, notification } from "antd";
import { toBool } from "diginext-utils/dist/object";
import Timer from "diginext-utils/dist/Timer";
import { motion, useMotionValue } from "framer-motion";
import html2canvas from "html2canvas-pro";
import { memo, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as XLSX from "xlsx";

let alphabet = "abcdefghijklmnopqrstuvwxyz";

function FormExportTicket({ ...props }) {
  const constraintsRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [staticSeatValue, setStaticSeatValue] = useState<any>("");
  const [linkQRValue, setLinkQRValue] = useState<any>("");
  const [zoneValue, setZoneValue] = useState<any>("");
  const [fileName, setFileName] = useState<any>();
  const [fontSize, setFontSize] = useState<any>(16);
  const [positonSeat, setPositonSeat] = useState<any>();
  const [listTicket, setListTicket] = useState<any>([]);
  const [activeTicket, setActiveTicket] = useState<any>(-1);
  const [prefix, setPrefix] = useState<any>();
  const [url1, setUrl1] = useState<any>("");
  const [images1, setImages1] = useState<any>("");
  const [loadingImg1, setLoadingImg1] = useState<any>(false);
  const [color, setColor] = useState<any>("#000000");
  const [fontUrl, setFontUrl] = useState();
  const [sizeTicket, setSizeTicket] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [startOrder, setStartOrder] = useState<any>();
  const [exportFrom, setExportFrom] = useState<any>(0);
  const [exportTo, setExportTo] = useState<any>(1000);
  const [dataExcel, setDataExcel] = useState<any>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<any>({ mode: "all" });

  const onSubmit = async (data: any) => {
    let zone = data?.zone;
    let rows: number = parseInt(data?.rows);
    let seats: number = parseInt(data?.seats);
    let tickets: any = [];

    if (dataExcel) {
      setListTicket(dataExcel);
    } else {
      if (staticSeatValue) {
        tickets.push({
          seat: `${staticSeatValue}`.toUpperCase(),
        });
      } else {
        if (zone && rows) {
          [...Array(rows)].map((row, i) => {
            [...Array(seats)].map((seta, i2) => {
              tickets.push({
                // seat: `${zone}${alphabet[i]}${i2 + 1 < 10 ? `00${i2 + 1}` : i2 + 1 < 100 ? `0${i2 + 1}` : i2 + 1}`.toUpperCase(),
                seat: `${zone}${alphabet[i]}${i2 + 1}`.toUpperCase(),
              });
            });
          });
        } else {
          [...Array(seats)].map((seta, i2) => {
            // tickets.push({ seat: i2 + 1 < 10 ? `00${i2 + 1}` : i2 + 1 < 100 ? `0${i2 + 1}` : i2 + 1 });
            tickets.push({
              seat: `${zone}${i2 + 1}`.toUpperCase(),
            });
          });
        }
      }

      setListTicket(tickets);
    }
  };
  const creatImg = async (e: any, i: any, options?: any) => {
    const canvas = await html2canvas(e, {
      scale: 1,
      allowTaint: false,
      useCORS: true,
    });
    const img = canvas.toDataURL(`image/jpg`);

    let link = document.createElement("a");
    link.style.display = "none";
    link.href = img;
    link.download = staticSeatValue
      ? `${fileName}-${staticSeatValue}-${prefix}.jpg`
      : `${fileName}${startOrder ? `-00${startOrder}` : ""}${
          listTicket[i].seat ? `-${listTicket[i].seat}` : ""
        }${listTicket[i].name ? `-${listTicket[i].name}` : ""}-${prefix}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
  };

  const onDownload = async () => {
    if (activeTicket >= exportFrom - 1 && activeTicket < exportTo) {
      const element = document.querySelector(".itemTicket");

      console.log("BiMeow log element itemTicket", element);

      const res = await creatImg(element, activeTicket);

      if (res) {
        if (activeTicket + 1 < listTicket.length) {
          if (startOrder) setStartOrder(parseInt(startOrder) + 1);
          setActiveTicket(activeTicket + 1);
        } else {
          if (startOrder) setStartOrder(parseInt(startOrder) + 1);
          setActiveTicket(-1);
          setIsDownloading(false);
        }
      }
    } else {
      setActiveTicket(-1);
      setIsDownloading(false);
    }
  };

  const onClickDownload = async () => {
    setPrefix(+new Date());
    setActiveTicket(0);
    setIsDownloading(true);
  };

  const handleChangeImage = (e: any, type = 1) => {
    const fileList = e.target.files || [];
    const file = fileList[0];
    const maxSize = 8 * 1024 * 1024;
    if (!file) {
      return;
    }
    if (file?.size > maxSize) {
      notification.error({
        message: `Vui lòng nhập file có dung lượng dưới 5Mb`,
      });
      return;
    }

    if (type === 1) {
      setLoadingImg1(true);
      setImages1(file);
      const _url = URL.createObjectURL(file);
      setUrl1(_url);
    }
  };

  const checkImageLoadAsync = (imageUrl: string) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = async function () {
        setWidth(img.naturalWidth);
        setHeight(img.naturalHeight);

        resolve(true);
      };
      img.onerror = function () {
        reject(new Error("Không thể tải hình ảnh."));
        setLoadingImg1(false);
      };
      img.src = imageUrl;
    });
  };

  const loadImageAndCheck = async (_url: string) => {
    try {
      await checkImageLoadAsync(_url);
      await Timer.wait(200);
      setLoadingImg1(false);
    } catch (error) {
      console.error("Không thể tải hình ảnh.");
    }
  };

  const handleFontChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      // Xử lý file ở đây nếu cần thiết, ví dụ: tải lên máy chủ
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const url = event.target.result;
        setFontUrl(url);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName: any = workbook.SheetNames[0];
      const sheet: any = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet);

      setDataExcel(sheetData);
    };

    reader.readAsBinaryString(file);
  };

  useEffect(() => {
    if (!url1) {
      return;
    }
    loadImageAndCheck(url1);
  }, [url1]);

  useEffect(() => {
    if (listTicket) {
      const ele = document.querySelector(".itemTicket");
      if (ele) setSizeTicket(ele.clientWidth);
    }
  }, [listTicket]);

  useEffect(() => {
    if (activeTicket >= 0) {
      setTimeout(() => {
        onDownload();
      }, 300);
    }
  }, [activeTicket]);

  return (
    <>
      <form
        className="FormExportTicket font-Unbounded mx-auto flex w-[1000px] flex-wrap gap-y-[20px] pt-[50px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`
                        itemForm relative w-full px-[10px]
                    `}
        >
          <label htmlFor="zone" className="mb-[10px] block">
            Data Excel
          </label>
          <input
            type="file"
            onChange={handleFileUpload}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
        </div>

        {dataExcel ? (
          ""
        ) : (
          <>
            <div
              className={`
                        itemForm relative px-[10px]
                        ${staticSeatValue ? "w-1/3" : "w-1/2"}
                    `}
            >
              <label htmlFor="zone" className="mb-[10px] block">
                Số ghế cứng
              </label>
              <input
                id="zone"
                className="cusInput w-full rounded-[5px] border-none p-[5px] uppercase text-black shadow-none outline-none"
                type="text"
                placeholder=""
                onChange={(e) => setStaticSeatValue(e.target.value)}
              />
            </div>
            <div
              className={`
                        itemForm relative px-[10px]
                        ${staticSeatValue ? "w-1/3" : "w-1/2"}
                    `}
            >
              <label htmlFor="zone" className="mb-[10px] block">
                Link hình QR
              </label>
              <input
                id="zone"
                className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none"
                type="text"
                placeholder=""
                onChange={(e) => setLinkQRValue(e.target.value)}
              />
            </div>
          </>
        )}

        {staticSeatValue || dataExcel ? (
          <>
            <div
              className={`
                                itemForm relative px-[10px]
                                ${staticSeatValue ? "w-1/3" : "w-1/4"}
                            `}
            >
              <label htmlFor="seats" className="mb-[10px] block">
                Tên file tải về
              </label>
              <input
                id="fileName"
                className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none"
                type="text"
                placeholder=""
                {...register("fileName", {
                  required: true,
                  validate: (value) => value.toString().trim() !== "",
                })}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="itemForm relative w-1/4 px-[10px]">
              <label htmlFor="zone" className="mb-[10px] block">
                Khu vực
              </label>
              <input
                id="zone"
                className="cusInput w-full rounded-[5px] border-none p-[5px] uppercase text-black shadow-none outline-none"
                type="text"
                placeholder=""
                {...register("zone")}
                onChange={(e) => setZoneValue(e.target.value)}
              />
            </div>

            <div className="itemForm relative w-1/4 px-[10px]">
              <label htmlFor="rows" className="mb-[10px] block">
                Số hàng ghế
              </label>
              <input
                disabled={!zoneValue}
                id="rows"
                className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none disabled:pointer-events-none disabled:opacity-50"
                type="number"
                placeholder=""
                {...register("rows")}
              />
            </div>

            <div className="itemForm relative w-1/4 px-[10px]">
              <label htmlFor="seats" className="mb-[10px] block">
                Số ghế (mỗi hàng)
              </label>
              <input
                id="seats"
                className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none"
                type="number"
                placeholder=""
                {...register("seats", {
                  required: true,
                  validate: (value) => value.toString().trim() !== "",
                })}
              />
            </div>

            <div
              className={`
                                itemForm relative px-[10px]
                                ${staticSeatValue ? "w-1/3" : "w-1/4"}
                            `}
            >
              <label htmlFor="seats" className="mb-[10px] block">
                Tên file tải về
              </label>
              <input
                id="fileName"
                className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none"
                type="text"
                placeholder=""
                {...register("fileName", {
                  required: true,
                  validate: (value) => value.toString().trim() !== "",
                })}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>

            <div className="itemForm relative w-1/3 px-[10px]">
              <label htmlFor="zone" className="mb-[10px] block">
                Stt bắt đầu từ
              </label>
              <input
                id="zone"
                className="cusInput w-full rounded-[5px] border-none p-[5px] uppercase text-black shadow-none outline-none"
                type="number"
                placeholder=""
                onChange={(e) => setStartOrder(e.target.value)}
              />
            </div>

            <div className="itemForm relative w-1/3 px-[10px]">
              <label htmlFor="exportFrom" className="mb-[10px] block">
                Xuất từ
              </label>
              <input
                defaultValue={exportFrom}
                id="exportFrom"
                className="cusInput w-full rounded-[5px] border-none p-[5px] uppercase text-black shadow-none outline-none"
                type="number"
                placeholder=""
                onChange={(e) => setExportFrom(e.target.value)}
              />
            </div>

            <div className="itemForm relative w-1/3 px-[10px]">
              <label htmlFor="exportTo" className="mb-[10px] block">
                Xuất đến
              </label>
              <input
                defaultValue={exportTo}
                id="exportTo"
                className="cusInput w-full rounded-[5px] border-none p-[5px] uppercase text-black shadow-none outline-none"
                type="number"
                placeholder=""
                onChange={(e) => setExportTo(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="itemForm relative w-1/4 px-[10px]">
          <label htmlFor="seats" className="mb-[10px] block">
            Tải ảnh
          </label>
          <div className="group relative rounded-[10px]">
            <input
              type="file"
              className="absolute left-0 top-0 size-full cursor-pointer opacity-0"
              accept="image/*"
              name="images-1"
              id="imgInput"
              onChange={(e: any) => handleChangeImage(e, 1)}
            />

            {url1 ? (
              <div className="relative">
                <img
                  src={url1}
                  alt=""
                  className={`
                                    aspect-[1] w-[200px] object-contain
                                    ${loadingImg1 ? "opacity-0" : "opacity-1"}
                                    `}
                />
                <div
                  className="iconClose flexCenter bg-[#ff0000]-500 hover:bg-yellow absolute right-[5px] top-[5px] z-[2] size-[20px] cursor-pointer rounded-[2px]"
                  onClick={() => {
                    setImages1("");
                    setUrl1("");
                  }}
                >
                  <span className="leading-0 hover:text-red text-black duration-300">
                    &#x2715;
                  </span>
                </div>
              </div>
            ) : (
              <div className="group-hover:text-red space-y-[10px] rounded-[5px] bg-[#f4f4f4] fill-[#4F4F4F] p-[5px] text-[#4F4F4F] duration-500">
                <p className="font-semibold">TẢI HÌNH ẢNH</p>
              </div>
            )}
          </div>
        </div>

        <div className="itemForm relative w-1/4 px-[10px]">
          <label htmlFor="seats" className="mb-[10px] block">
            Màu
          </label>
          <ColorPicker
            value={color}
            onChangeComplete={(e) => {
              setColor(e.toHexString());
            }}
          />
        </div>

        <div className="itemForm relative w-1/4 px-[10px]">
          <label htmlFor="seats" className="mb-[10px] block">
            Font size
          </label>
          <input
            defaultValue={fontSize}
            id="fontSize"
            className="cusInput w-full rounded-[5px] border-none p-[5px] text-black shadow-none outline-none"
            type="text"
            placeholder=""
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>

        <div className="itemForm relative w-1/4 px-[10px]">
          <label htmlFor="seats" className="mb-[10px] block">
            Font
          </label>
          <input
            type="file"
            className="w-full"
            accept=".ttf,.otf"
            onChange={handleFontChange}
          />
        </div>

        <div
          className="flex w-full gap-[20px]"
          onClick={() => {
            if (!positonSeat)
              message.warning("Vui lòng điều chỉnh vị trí số ghế!");
          }}
        >
          <button
            className="btnMain disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            disabled={!positonSeat}
          >
            submit
          </button>

          {toBool(listTicket?.length) && toBool(positonSeat) && (
            <button
              className="btnMain disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              onClick={() => {
                onClickDownload();
              }}
            >
              Tải xuống
            </button>
          )}
        </div>
      </form>

      {url1 && (
        <>
          <div className="itemForm fixed left-[20px] top-1/2 z-[444] translate-y-[-50%]">
            <label
              htmlFor="seats"
              className="mb-[10px] block select-none text-[#ff0000]"
            >
              Chỉnh sửa vị trí số ghế
            </label>
            <motion.div
              className="itemTicketDemo relative mx-auto w-[300px]"
              ref={constraintsRef}
            >
              <img src={url1} alt="" className="w-full select-none" />
              {dataExcel || linkQRValue ? (
                <img
                  src={linkQRValue || dataExcel[0]?.qrCode}
                  alt=""
                  className="absolute bottom-[6.5%] left-[53.25%] z-50 w-[19%] rounded-[10%]"
                />
              ) : (
                ""
              )}
              <p
                className="cusFont absolute bottom-[21%] left-1/2 z-10 w-full -translate-x-1/2 text-center uppercase"
                style={{
                  fontSize: `${fontSize}px`,
                  color: color,
                }}
              >
                Name
              </p>
              {startOrder && (
                <p
                  className="cusFont absolute bottom-[9.5%] left-[15%]"
                  style={{
                    fontSize: `${fontSize}px`,
                    color: color,
                  }}
                >
                  00{startOrder}
                </p>
              )}
              <motion.p
                className="cusFont absolute z-10 w-[0px] text-center !leading-[0]"
                style={{
                  fontSize: `${fontSize}px`,
                  color: color,
                  x,
                  y,
                  left: `${positonSeat?.x * 100 || 0}%`,
                  top: `${positonSeat?.y * 100 || 0}%`,
                }}
                drag
                dragConstraints={constraintsRef}
                onDragEnd={(e, info) => {
                  const element = document.querySelector(".itemTicketDemo");
                  if (element) {
                    const currentX = positonSeat
                      ? element.clientWidth * positonSeat?.x
                      : 0;
                    const currentY = positonSeat
                      ? element.clientHeight * positonSeat?.y
                      : 0;

                    setPositonSeat({
                      x: (x.get() + currentX) / element.clientWidth,
                      y: (y.get() + currentY) / element.clientHeight,
                    });

                    x.set(0);
                    y.set(0);
                  }
                }}
              >
                000
              </motion.p>
            </motion.div>
          </div>

          <div
            className="itemTicket font-Unbounded absolute left-0 top-0 z-[777] translate-y-[-200%]"
            style={{
              width,
              height,
            }}
          >
            <img src={url1} alt="ticket" className="relative z-0" />
            <img
              src={linkQRValue || listTicket[activeTicket]?.qrCode}
              // crossOrigin="anonymous"
              alt="qrCode"
              className="absolute bottom-[6.5%] left-[53.25%] z-50 w-[19%] rounded-[10%]"
            />
            <p
              className="cusFont absolute bottom-[21%] left-1/2 z-10 w-full -translate-x-1/2 text-center uppercase"
              style={{
                fontSize: `${(sizeTicket * fontSize) / 300}px`,
                color: color,
              }}
            >
              {listTicket[activeTicket]?.name}
            </p>
            {startOrder && (
              <p
                className="cusFont absolute bottom-[9.5%] left-[15%]"
                style={{
                  fontSize: `${(sizeTicket * fontSize) / 300}px`,
                  color: color,
                }}
              >
                00{startOrder}
              </p>
            )}
            <p
              className="cusFont absolute z-10 w-[0px] text-center uppercase !leading-[0]"
              style={{
                left: `${positonSeat?.x * 100 || 0}%`,
                top: `${positonSeat?.y * 100 || 0}%`,
                color: color,
                fontSize: `${(sizeTicket * fontSize) / 300}px`,
              }}
            >
              {listTicket[activeTicket]?.seat}
            </p>
          </div>
        </>
      )}

      {fontUrl && (
        <style jsx global>
          {`
            @font-face {
              font-family: "CustomFont";
              src: url(${fontUrl});
            }

            .cusFont {
              font-family: ${fontUrl ? "'CustomFont', sans-serif" : "inherit"};
            }
          `}
        </style>
      )}
    </>
  );
}

export default memo(FormExportTicket);
