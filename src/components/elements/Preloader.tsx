/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { memo } from "react";

import { useStorage } from "@/components/context/StorageProvider";

function Preloader({ ...props }) {
  const router = useRouter();

  const { isLoading } = useStorage();

  return (
    <>
      <div
        className={`
                Preloader fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-greenDark backdrop-blur-[20px] duration-500
                ${isLoading ? "" : "scale-0 rounded-full opacity-0"}
                `}
      >
        <div className="black-hole">
          <ul className="gooey-container">
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
            <li className="bubble"></li>
          </ul>
        </div>
      </div>

      <style jsx global>
        {`
          .Preloader {
            .black-hole {
              backface-visibility: hidden;
              z-index: 20;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              overflow: hidden;
              border-radius: 50%;
              width: 250px;
              height: 250px;
              padding: 0;
              box-shadow: 0 0 25px 0 #bdff00 inset;

              .gooey-container {
                overflow: hidden;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(0deg) skew(5deg);
                filter: url(#gooey-plasma-2);
                width: 294px;
                height: 294px;
                padding: 0;
                margin: 0;
                box-shadow: 0 0 0 22px #bdff00 inset;
                animation: black-hole-rotate 5s ease infinite;

                .bubble {
                  display: block;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 100%;
                  text-align: right;

                  &:before {
                    content: "";
                    display: inline-block;
                    background: #bdff0077;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    transform: scale(1) translate3d(75px, 0, 0);
                    box-shadow: 0 0 10px 0 #bdff0077 inset,
                      0 0 10px 0 #bdff0077 inset;
                  }
                }
                @for $i from 1 through 6 {
                  .bubble:nth-child(#{$i}) {
                    transform: translate(-50%, -50%) rotate(60deg * $i);
                  }
                  .bubble:nth-child(#{$i}):before {
                    animation: black-hole 1.3s * ($i) ease 0.8s * $i infinite;
                  }
                }
              }

              &:before,
              &:after {
                border-radius: inherit;
                box-shadow: 0 0.3em 0.3em rgba(0, 0, 0, 0.4);
                content: "";
                left: 50%;
                position: absolute;
                top: 50%;
              }

              &:before {
                animation: middle-ripple 1s ease-in-out infinite -25ms;
                background: #bdff0011;
                height: 12em;
                margin: -6em 0 0 -6em;
                width: 12em;
              }

              &:after {
                animation: top-ripple 1s ease-in-out infinite;
                background: #07171c77;
                height: 6em;
                margin: -3em 0 0 -3em;
                width: 6em;
                background-image: url("/images/logo.png");
                background-repeat: no-repeat;
                background-size: 80% auto;
                background-position: center;
              }
            }
          }
        `}
      </style>
    </>
  );
}

export default memo(Preloader);
