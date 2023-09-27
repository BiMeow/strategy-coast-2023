import { useStorage } from "@/components/context/StorageProvider";

const Loading = () => {
  const { isLoading } = useStorage();

  return (
    <>
      <div
        className={`
        wrapLoading fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden duration-700
        ${isLoading ? "" : "scale-0 rounded-full opacity-0"}
        `}
      >
        <div className="overlay absolute left-0 top-0 h-full w-full //bg-[#0007] bg-greenDark backdrop-blur-[40px]"></div>
        <div className="logo relative w-[200px] rounded-full overflow-hidden bg-greenDark">
          <div className="aspect-1"></div>
          <img
            src="/images/loader.png"
            alt=""
            className="move absolute w-[500px] h-full max-w-none top-0 left-0"
          />
        </div>
      </div>
      <style jsx>{`
        .logo {
          //animation: opacity 1s linear 0s infinite alternate;
        }

        .move {
          animation: marquee 5s linear infinite;
        }

        @keyframes opacity {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-300px);
          }
        }
      `}</style>
    </>
  );
};

export default Loading;
