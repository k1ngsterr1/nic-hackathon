import Image from "next/image";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="flex items-center justify-center loading-spinner">
      <Image src={"/loading.svg"} width={200} height={200} alt="loading" />
    </div>
  );
};

export default Loading;
