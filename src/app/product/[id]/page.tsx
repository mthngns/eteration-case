"use client";
import React from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const productId = params.id;

    return (
      <div className="flex w-full h-full justify-center py-0">
        <div
          className={`flex flex-col w-11/12 gap-4 py-4 lg:grid lg:grid-cols-12 gap-x-4`}
        >
          {productId}
        </div>
      </div>
    );
};

export default ProductDetail;
