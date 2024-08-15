import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pageRange, setPageRange] = useState(7); // Number of pages to show before and after the current page

  const getPaginationRange = () => {
    const range = [];
    const start = Math.max(currentPage - pageRange, 1);
    const end = Math.min(currentPage + pageRange, totalPages);

    if (start > 2) {
      range.push("...");
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (end < totalPages - 1) {
      range.push("...");
    }

    return range;
  };

  return (
    <div className="bg-white py-4 flex flex-row justify-between border-b border-l border-r px-6">
      <div>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="border py-2 px-4 font-medium rounded-[4px] shadow border-GRAY04 hover:bg-RED01 hover:text-white"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </div>
      <div className="flex flex-row gap-2">
        {getPaginationRange().map((page, index) => (
          <button
            key={index}
            onClick={() => {
              if (typeof page === "number") {
                onPageChange(page);
              }
            }}
            className={` py-2 px-4 font-medium rounded-[4px]  ${
              page === currentPage
                ? "bg-RED01 text-white"
                : "hover:bg-RED01 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="border py-2 px-4 font-medium rounded-[4px] shadow border-GRAY04 hover:bg-RED01 hover:text-white"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

// Usage Exampl
