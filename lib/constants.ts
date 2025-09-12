import type { SortFlowersInterface } from "./types";

export const PER_PAGE_CONSTANTS = [2, 4, 6];

export const SORT_FLOWERS_CONSTANTS: SortFlowersInterface[] = [
  { label: "Title A to Z", value: "titleAsc" },
  { label: "Title Z to A", value: "titleDesc" },
  { label: "Price low to high", value: "priceAsc" },
  { label: "Price high to low", value: "priceDesc" },
];
