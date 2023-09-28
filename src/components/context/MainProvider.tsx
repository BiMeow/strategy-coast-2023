import React, { useContext, useEffect, useState } from "react";

import { useStorage } from "@/components/context/StorageProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MainContextType = {};

export const MainContext = React.createContext<any>(null);

interface Props {
  isPrivate?: boolean;
  children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children, isPrivate }) => {
  const { setIsLoading } = useStorage();

  const [init, setInit] = useState<boolean>(false);

  const initAnimation = () => {
    let listFadeIn = gsap.utils.toArray(".fadeIn");
    listFadeIn.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(l, { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1 });
    });

    let listFadeUp = gsap.utils.toArray(".fadeUp");
    listFadeUp.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { y: 150, autoAlpha: 0, opacity: 0 },
          { y: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeDown = gsap.utils.toArray(".fadeDown");
    listFadeDown.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { y: -150, autoAlpha: 0, opacity: 1 },
          { y: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeRight = gsap.utils.toArray(".fadeRight");
    listFadeRight.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { x: -150, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeLeft = gsap.utils.toArray(".fadeLeft");
    listFadeLeft.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "top 75%",
          },
        })
        .fromTo(
          l,
          { x: 150, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listHeading = gsap.utils.toArray(".headingAnimation");

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (init) {
      setTimeout(() => {
        initAnimation();
      }, 400);
    }
  }, [init]);

  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
};

export default MainProvider;

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain has to be used within <MainContext.Provider>");
  }
  return context;
};
