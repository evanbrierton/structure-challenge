import { Instrument } from "@/types/api";

type Props = Instrument;

const Asset = ({ name, symbol, value, amount }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="w-8 h-8 bg-white rounded-full" />
      <div className="flex flex-col justify-center items-start">
        <span className="text-body-2">{name}</span>
        <span className="text-body-3 text-gray-4">{symbol}</span>
      </div>
      <div className="flex flex-col justify-center items-end">
        <span className="text-body-2">{value}</span>
        <span className="text-body-3 text-gray-4">{amount}</span>
      </div>
    </div>
  );
};

export default Asset;
