"use client";

import { Button } from "../ui/button";

interface Props {
  perPage: number;
  currentPage: number;
  totalItems: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleGoToPage: (page: number) => void;
}

const PaginationComponent = ({
  currentPage,
  perPage,
  totalItems,
  handleNextPage,
  handlePrevPage,
  handleGoToPage,
}: Props) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-between">
      <Button disabled={currentPage <= 1} onClick={handlePrevPage}>
        Previous
      </Button>
      <ul className="flex">
        {pagesArray.map((page) => (
          <li key={page}>
            <Button
              variant={currentPage === page ? "default" : "ghost"}
              onClick={() => handleGoToPage(page)}
            >
              {page}
            </Button>
          </li>
        ))}
      </ul>
      <Button disabled={currentPage>=totalPages} onClick={handleNextPage}>Next</Button>
    </div>
  );
};
export default PaginationComponent;
