import { PER_PAGE_CONSTANTS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Props {
  perPage: number;
  handlePerPageChange: (value: number) => void;
}

const PerPageSelect = ({ perPage, handlePerPageChange }: Props) => {
  return (
    <Select
      onValueChange={(stringValue) =>
        handlePerPageChange(parseInt(stringValue))
      }
      value={perPage.toString()}
    >
      <SelectTrigger className="w-fit ml-auto">
        Flowers on page:
        <SelectValue placeholder="Items per page" />
      </SelectTrigger>
      <SelectContent>
        {PER_PAGE_CONSTANTS.map((item) => (
          <SelectItem value={item.toString()} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default PerPageSelect;
