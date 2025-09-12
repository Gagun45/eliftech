"use client";

import { useGetSingleShopQuery } from "@/redux/services/singleShopService";
import { useEffect, useState } from "react";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import ShopFlowersContainer from "../ShopFlowersContainer/ShopFlowersContainer";
import PerPageSelect from "../PerPageSelect/PerPageSelect";
import { PER_PAGE_CONSTANTS } from "@/lib/constants";

interface Props {
  shopId: number;
}

const ShopPageContent = ({ shopId }: Props) => {
  const [perPage, setPerPage] = useState(PER_PAGE_CONSTANTS[0]);
  const [currentPage, setCurrentPage] = useState(1);
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
  const { data, isLoading } = useGetSingleShopQuery({
    shopId,
    page: currentPage,
    perPage,
  });
  if (isLoading) return <div>LOADING...</div>;
  if (!data?.shop) return <div>nodata</div>;
  const {
    shop: {
      flowers,
      _count: { flowers: totalFlowers },
    },
  } = data;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center w-full">
        <PerPageSelect
          perPage={perPage}
          handlePerPageChange={handlePerPageChange}
        />
      </div>
      <ShopFlowersContainer flowers={flowers} shopTitle={data.shop.title} />
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
