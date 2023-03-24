import React from "react";
import ImgRender from "./ImgRender";
import cube from "../assets/cube.svg";

export const Feature = ({ feature , img}) => {
  return (
    <div className="w-1/3 max-w-400 bg-neutral-800 p-4 rounded-lg text-center ">
      <h2 className="text-lg font-bold text-purple-700 mb-4">
        {feature.title}
      </h2>
      <hr className="border-purple-800 my-2" />
      <div className="w-full h-auto object-center p-6 flex justify-center items-center">
        <ImgRender src={img} name="ac" h="300" w="300" />
      </div>
      <p className="text-sm text-white leading-relaxed">{feature.text}</p>
    </div>
  );
};
