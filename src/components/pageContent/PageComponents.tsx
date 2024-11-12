import html2canvas from "html2canvas";
import { memo, useEffect, useRef, useState } from "react";
import { message } from "antd";
import FormExportTicket from "@/components/elements/FormExportTicket";

function PageComponents({ ...props }) {
  const videoRef: any = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState<any>(false);
  const [linkImg, setLinkImg] = useState<any>("");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef?.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track: any) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
      setLinkImg("");
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const creatImg = async (e: any) => {
    const canvas = await html2canvas(e, {
      scale: 1,
      allowTaint: false,
      useCORS: true,
    });
    const img = canvas.toDataURL(`image-test/jpg`);
    setLinkImg(img);

    let link = document.createElement("a");
    link.style.display = "none";
    link.href = img;
    link.download = `test.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return true;
  };

  const downloadImage = async () => {
    const element = document.querySelector(".cusCamera");

    const res = await creatImg(element);

    if (res) {
      message.success("Success");
    } else {
      message.warning("Fail");
    }
  };

  useEffect(() => {
    if (isCameraOn) {
      setTimeout(() => {
        downloadImage();
      }, 5000);
    }
  }, [isCameraOn]);

  return (
    <>
      <div className={`PageComponents px-[20px] py-[100px]`}>
        {linkImg && (
          <img
            src={linkImg}
            alt=""
            className="aspect-[500/375] w-full max-w-[500px] mx-auto mb-[20px] object-cover"
          />
        )}
        <div className="cusCamera aspect-[500/375] w-full max-w-[500px] mx-auto bg-black mb-[30px]">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="size-full object-cover"
          />
        </div>
        {!isCameraOn ? (
          <div className="btnMain text-center" onClick={startCamera}>
            Turn Camera On
          </div>
        ) : (
          <div className="btnMain text-center" onClick={stopCamera}>
            Turn Camera Off
          </div>
        )}
        <hr className="my-[30px] border-black"/>
        <h2 className="text-center text-[60px]">Export Image</h2>
        <FormExportTicket />
      </div>
    </>
  );
}

export default memo(PageComponents);
