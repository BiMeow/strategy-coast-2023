import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage bg-green`}>PageHome</div>
    </>
  );
}

export default memo(PageHome);
