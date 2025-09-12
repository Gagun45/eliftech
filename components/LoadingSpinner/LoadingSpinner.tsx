import { SyncLoader } from "react-spinners";

interface Props {
  className?: string;
}

const LoadingSpinner = ({ className }: Props) => {
  return <SyncLoader className={className} />;
};
export default LoadingSpinner;
