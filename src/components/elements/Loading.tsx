import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { useStorage } from "@/components/context/StorageProvider";

function Loading({ ...props }) {
  const router = useRouter();

  const { isLoading } = useStorage();

  return (
    <>
      <div className={`Loading`}>
        <div
          className={`
          fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden duration-700
          ${isLoading ? "" : "scale-0 rounded-full opacity-0"}
          `}
        >
          <div className="overlay absolute left-0 top-0 h-full w-full //bg-[#0007] bg-greenDark backdrop-blur-[40px]"></div>
          <div className="relative w-[200px] rounded-full overflow-hidden bg-greenDark">
            <div className="aspect-1"></div>
            <img
              src="/images/loader.png"
              alt=""
              className="move absolute w-[500px] h-full max-w-none top-0 left-0"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .Loading {
          .move {
            animation: marquee 5s linear infinite;
          }

          @media screen and (max-width: 767px) {
            .move {
              opacity: opacity 5s linear infinite;
            }
          }
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
}

export default memo(Loading);
