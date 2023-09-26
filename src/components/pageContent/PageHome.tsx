import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage bg-green`}>
        <SectionHomeBanner />
        <SectionHomeAbout />
      </div>
    </>
  );
}

export default memo(PageHome);
