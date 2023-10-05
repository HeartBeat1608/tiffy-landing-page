"use client";
import React, { useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeHandler = (e: any) => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return dimensions;
};

export default useDimensions;
