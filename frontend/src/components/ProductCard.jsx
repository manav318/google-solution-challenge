"use client";
import React from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover.jsx";

const ProductCard = ({ product, imageObserver }) => {
  return (
    <div
      key={product.id}
      className="product-card border p-2 rounded-lg shadow-lg cursor-pointer h-[23vw] w-[23vw] relative"
    >
      <p className="font-bold text-sm bg-blue-400 bg-opacity-50 text-white px-3 py-1 rounded-br-lg absolute top-0 left-0 z-10">{product.category}</p>

      <div className="h-full w-full ">
        <DirectionAwareHover 
          imageUrl={product.image}
          className="h-full w-full !aspect-square"
          imageClassName="object-cover"
        >
          <p className="font-bold text-xl">{product.name}</p>
          <p className="font-normal text-sm">${product.price}</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
};

export default ProductCard;