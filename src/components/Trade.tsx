import Image from "next/image";
import CurrencySelect from "./CurrencySelect";

type Props = {
  showAssets: () => void;
};

const Trade = ({ showAssets }: Props) => {
  const renderBuySellButtons = () => (
    <div className="flex gap-2 justify-start items-center">
      <button type="button" className="font-medium border-b-2">
        Buy
      </button>
      <button
        type="button"
        className="font-medium text-gray-4 hover:text-black border-b-2 border-b-transparent"
      >
        Sell
      </button>
    </div>
  );

  const renderValue = () => (
    <div className="flex justify-center items-center w-[100%] h-[152px]">
      <span className="text-header-3 tracking-tight">
        <span className="text-[28px]">$</span>
        <span className="relative top-1 text-[46px]">0</span>
      </span>
    </div>
  );

  const renderWallet = () => (
    <div className="flex gap-4 justify-between items-center w-[330px]">
      <span className="text-body-3 text-gray-4">ETH Wallet: $29,778.36</span>
      <div className=" flex gap-1 justify-between items-center text-[14px]">
        <button
          type="button"
          className="flex justify-center items-center w-[32px] h-[32px] bg-gray-8 hover:bg-gray-7 rounded-full"
        >
          <Image src="/svg/crypto.svg" width={13} height={18} />
        </button>
        <button
          type="button"
          className="px-[12px] w-[55px] h-[32px] bg-gray-8  hover:bg-gray-7 rounded-full"
        >
          MAX
        </button>
      </div>
    </div>
  );

  const renderBuyButton = () => {
    return (
      <button
        type="button"
        className="w-[330px] h-[57px] text-white bg-black rounded-lg"
      >
        Buy
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-2 justify-start items-start py-5 px-4 w-[380px] h-[455px] bg-white rounded-xl border border-gray-6">
      {renderBuySellButtons()}
      {renderValue()}
      {renderWallet()}
      <CurrencySelect showAssets={showAssets} />
      {renderBuyButton()}
    </div>
  );
};

export default Trade;
