import { useCoins, useStocks } from "../hooks/api";
import Asset from "./Asset";

type Props = {
  verb: "buy" | "sell";
};

const Assets = ({ verb }: Props) => {
  const { data: stocks } = useStocks();
  const { data: coins } = useCoins();

  return (
    <div className="flex flex-col gap-5 py-5 px-4 w-[380px] h-[668px] bg-white rounded-xl border border-gray-6">
      <h5 className="text-header-5 font-medium">
        Which asset would you like to {verb}?
      </h5>
      <input
        type="text"
        placeholder="Search assets"
        className="px-3 w-[330px] h-[57px] bg-gray-6 rounded-lg"
      />
      <div className="flex flex-col gap-5 justify-start items-start w-[330px]">
        {coins?.slice(0, 4).map((coin) => (
          <Asset key={coin.id} {...coin} />
        ))}
      </div>
      <hr className="m-0 w-[100%] text-gray-6" />
      <div className="flex flex-col gap-5 justify-start items-start pb-[21px] w-[330px]">
        {stocks?.slice(0, 2).map((stock) => (
          <Asset key={stock.id} {...stock} />
        ))}
      </div>
      <button
        type="button"
        className="w-[100%] h-[57px] text-subtitle-1 text-red-4 rounded-xl border border-gray-6"
      >
        Cancel
      </button>
    </div>
  );
};

export default Assets;
