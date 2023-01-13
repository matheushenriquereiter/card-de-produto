import { useState } from "react";
import React from "react";
import exit from "../assets/exit.svg";
import viewer from "../assets/viewer.svg";

const card = ({ code, product, price, productImage, productGif }) => {
  const [image, setImage] = useState(true);

  return (
    <div className="h-[500px] w-[875px] bg-pink text-blue flex items-center rounded-[10px] shadow-xl mx-4 flex-col justify-evenly md:justify-start md:flex-row gap-0 md:gap-3">
      <div className="relative">
        <img
          className="rounded-[10px]"
          src={image ? productImage : productGif}
          alt="Imagem do produto"
        />
        <button
          className="absolute top-1 right-6 md:top-2 md:right-12"
          onClick={() => {
            setImage(!image);
          }}
        >
          <img
            className="h-[22px]"
            src={image ? viewer : exit}
            alt="Botão de visualização 360 graus."
          />
        </button>
      </div>
      <div className="p-3 md:p-0">
        <div className="flex flex-col gap-3 mb-5">
          <p className="text-[10px] font-lato font-light">{code}</p>
          <h1 className="font-semibold text-[32px] font-crimsonPro">
            {product}
          </h1>
          <p className="text-[16px] font-lato font-regular text-purple">
            {price}
          </p>
        </div>
        <button className="text-[12px] py-2 px-4 transition-duration hover:scale-105 border border-blue font-normal rounded-full">
          ADICIONAR À CESTA
        </button>
      </div>
    </div>
  );
};

export default card;
