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

  const initAnimation = () => {
    let listFadeIn = gsap.utils.toArray(".fadeIn");
    listFadeIn.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
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
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { y: 75, autoAlpha: 0, opacity: 0 },
          { y: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeDown = gsap.utils.toArray(".fadeDown");
    listFadeDown.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { y: -75, autoAlpha: 0, opacity: 1 },
          { y: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeRight = gsap.utils.toArray(".fadeRight");
    listFadeRight.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { x: -75, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    let listFadeLeft = gsap.utils.toArray(".fadeLeft");
    listFadeLeft.forEach((l: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: l,
            start: "50px bottom",
          },
        })
        .fromTo(
          l,
          { x: 75, autoAlpha: 0, opacity: 0 },
          { x: 0, autoAlpha: 1, opacity: 1 }
        );
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setTimeout(() => {
      initAnimation();
      setIsLoading(false);
    }, 750);
  }, []);

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
