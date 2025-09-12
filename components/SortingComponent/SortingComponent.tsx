import type { SortFlowersInterface } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  currentSortOpion: SortFlowersInterface;
  sortOptions: SortFlowersInterface[];
  handleSortChange: (sortOptionValue: string) => void;
}

const SortingComponent = ({
  handleSortChange,
  sortOptions,
  currentSortOpion,
}: Props) => {
  return (
    <Select
      onValueChange={(value) => handleSortChange(value)}
      value={currentSortOpion.value}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Sorting option" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((item) => (
          <SelectItem value={item.value} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default SortingComponent;
