import Chevron from "./Chevron";

const Trade = () => {
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
      <span className="text-caption text-gray-4">ETH Wallet: $29,778.36</span>
      <div className=" flex gap-1 justify-between items-center text-[14px]">
        <button
          type="button"
          className="w-[32px] h-[32px] bg-gray-8 hover:bg-gray-7 rounded-full"
        >
          C
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

  const renderCurrencySelect = () => {
    const renderRow = (
      label: string,
      currency: string,
      { first = false, last = false } = {},
      action?: () => void
    ) => (
      <div
        className={`${action ? "hover:bg-gray-8 cursor-pointer" : ""} ${
          first ? "rounded-t-xl" : ""
        } ${
          last ? "rounded-b-xl" : ""
        } flex justify-between items-center px-4 w-[100%] h-[50%]`}
      >
        <div className="flex justify-between items-center w-[50%]">
          <span className="w-12 text-caption">{label}</span>
          <div className="flex gap-1 justify-between items-center">
            <div className="w-5 h-5 bg-white rounded-full border border-gray-6" />
            <span>{currency}</span>
          </div>
        </div>
        <button type="button" className="rounded-full">
          <Chevron />
        </button>
      </div>
    );

    return (
      <div className="flex flex-col justify-around w-[330px] h-[131px] rounded-xl border border-gray-6">
        {renderRow("Buy", "BTC", { first: true }, () => {})}
        <hr className="m-0 text-gray-6" />
        <button
          type="button"
          aria-label="swap"
          className="absolute ml-[235px] w-8 h-8 bg-gray-8 hover:bg-gray-7 rounded-full border-[3px] border-white"
        />
        {renderRow("Pay With", "ETH", { last: true })}
      </div>
    );
  };

  const renderBuyButton = () => {
    return (
      <button
        type="button"
        className="w-[330px] h-[57px] text-white bg-black rounded-xl"
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
      {renderCurrencySelect()}
      {renderBuyButton()}
    </div>
  );
};

export default Trade;
