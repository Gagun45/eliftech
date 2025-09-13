import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";

interface Props {
  className?: string;
}

const LoadingButton = ({ className }: Props) => {
  return (
    <Button className={className} disabled>
      <BeatLoader color="white"/>
    </Button>
  );
};
export default LoadingButton;
