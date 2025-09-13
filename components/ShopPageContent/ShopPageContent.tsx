"use client";

import { useGetSingleShopQuery } from "@/redux/services/singleShopService";
import { useEffect, useState } from "react";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import ShopFlowersContainer from "../ShopFlowersContainer/ShopFlowersContainer";
import PerPageSelect from "../PerPageSelect/PerPageSelect";
import { PER_PAGE_CONSTANTS, SORT_FLOWERS_CONSTANTS } from "@/lib/constants";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import type { SortFlowersInterface } from "@/lib/types";
import SortingComponent from "../SortingComponent/SortingComponent";

interface Props {
  shopId: number;
}

const ShopPageContent = ({ shopId }: Props) => {
  const [perPage, setPerPage] = useState(PER_PAGE_CONSTANTS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSortOpion, setCurrentSortOption] =
    useState<SortFlowersInterface>(SORT_FLOWERS_CONSTANTS[0]);
  const handleSortChange = (sortOptionValue: string) => {
    const newSortOption = SORT_FLOWERS_CONSTANTS.find(
      (opt) => opt.value === sortOptionValue
    );
    if (!newSortOption) setCurrentSortOption(SORT_FLOWERS_CONSTANTS[0]);
    else setCurrentSortOption(newSortOption);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [perPage]);
  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const handleGoToPage = (page: number) => {
    setCurrentPage(page);
  };
  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
  };
  const { data, isLoading, isFetching } = useGetSingleShopQuery({
    shopId,
    page: currentPage,
    perPage,
    sortOptionValue: currentSortOpion.value,
  });
  if (!data?.shop) return null
  const {
    shop: {
      flowers,
      _count: { flowers: totalFlowers },
    },
  } = data;
  if (flowers.length===0) return <span className="text-2xl font-bold">No flowers found</span>
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl">
      <div className="flex items-center justify-between w-full">
        <SortingComponent
          sortOptions={SORT_FLOWERS_CONSTANTS}
          handleSortChange={handleSortChange}
          currentSortOpion={currentSortOpion}
        />
        <PerPageSelect
          perPage={perPage}
          handlePerPageChange={handlePerPageChange}
        />
      </div>
      {isLoading || isFetching ? (
        <LoadingSpinner className="mx-auto py-16"/>
      ) : (
        <ShopFlowersContainer flowers={flowers} shopTitle={data.shop.title} />
      )}

      <PaginationComponent
        handleGoToPage={handleGoToPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        perPage={perPage}
        totalItems={totalFlowers}
      />
    </div>
  );
};
export default ShopPageContent;
