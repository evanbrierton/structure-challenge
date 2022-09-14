import { useCoins, useStocks } from "../hooks/api";
import Asset from "./Asset";

type Props = {
  verb?: "buy" | "sell";
  cancel: () => void;
};

const Assets = ({ verb = "buy", cancel }: Props) => {
  const { data: stocks, loading: stocksLoading } = useStocks();
  const { data: coins, loading: coinsLoading } = useCoins();

  const isLoading = () => stocksLoading || coinsLoading;

  const renderContents = () => {
    if (isLoading())
      return (
        <div className="flex justify-center items-center w-[100%] h-[100%]">
          <p className="text-header-3 text-gray-5">Loading...</p>
        </div>
      );

    return (
      <>
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
            <Asset key={stock.id} {...stock} isStock />
          ))}
        </div>
        <button
          type="button"
          className="w-[100%] h-[57px] text-subtitle-1 text-red-4 rounded-xl border border-gray-6"
          onClick={cancel}
          tabIndex={0}
        >
          Cancel
        </button>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-5 py-5 px-4 w-[380px] h-[668px] bg-white rounded-xl border border-gray-6">
      {renderContents()}
    </div>
  );
};

export default Assets;
