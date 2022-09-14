import { Instrument } from "@/types/api";
import Image from "next/image";

type Props = Instrument & { isStock?: boolean };

const Asset = ({ name, symbol, value, amount, isStock = false }: Props) => {
  const getAmountColor = () => {
    if (!isStock) return "text-gray-4";
    if (amount > 0) return "text-green-4";
    return "text-red-4";
  };

  return (
    <div className="flex justify-between items-center w-[100%] h-8">
      <div className="flex gap-2 justify-around items-center">
        <div className="w-8 h-8 bg-white rounded-full border border-gray-6" />
        <div className="flex flex-col justify-center items-start">
          <span className="text-body-2">{name}</span>
          <span className="text-body-3 text-gray-4">{symbol}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <span className="text-body-2">{value}</span>
        <span
          className={`text-body-3 justify-between flex gap-1 items-center ${getAmountColor()}`}
        >
          {isStock && (
            <Image
              src={`/svg/${amount > 0 ? "up" : "down"}.svg`}
              width={11}
              height={6}
            />
          )}
          {amount}
        </span>
      </div>
    </div>
  );
};

export default Asset;
