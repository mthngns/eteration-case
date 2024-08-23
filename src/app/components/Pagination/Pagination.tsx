import { LIMIT } from "@/app/lib/constants";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: () => void;
  previous: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  next,
  previous,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex w-fit max-w-full self-center justify-center mt-4 text-xs">
      <button
        onClick={previous}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
      >
        Prev
      </button>
      <div className="flex w-full overflow-scroll">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === page
                ? "bg-eterationBlue text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={next}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-gray-300 text-gray-700 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
