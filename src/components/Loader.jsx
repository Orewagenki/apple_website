import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-[10vw] h-[10vw] roundered-full">Loading...</div>
    </Html>
  );
};

export default Loader;
