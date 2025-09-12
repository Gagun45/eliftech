import { BeatLoader } from "react-spinners";
import { Button } from "../ui/button";

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
