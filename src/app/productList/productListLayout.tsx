import React from "react";

const ProductListPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full justify-center py-0">
      <div
        className={`flex flex-col w-11/12 gap-4 py-4 lg:grid lg:grid-cols-12`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProductListPageLayout;
