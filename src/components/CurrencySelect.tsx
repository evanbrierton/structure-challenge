import Image from "next/image";

type RowProps = {
  label: string;
  currency: string;
  first?: boolean;
  last?: boolean;
  handleClick?: () => void;
};

const Row = ({
  label,
  currency,
  handleClick,
  first = false,
  last = false,
}: RowProps) => {
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Enter") handleClick?.();
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      className={`${handleClick ? "hover:bg-gray-8 cursor-pointer" : ""} ${
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
        <Image src="/svg/chevron.svg" width={7} height={14} />
      </button>
    </div>
  );
};

type Props = {
  showAssets: () => void;
};

const CurrencySelect = ({ showAssets }: Props) => {
  return (
    <div className="flex flex-col justify-around w-[330px] h-[131px] rounded-xl border border-gray-6">
      <Row label="Buy" currency="BTC" first handleClick={showAssets} />
      <hr className="m-0 text-gray-6" />
      <button
        type="button"
        aria-label="swap"
        className="flex absolute justify-center items-center ml-[235px] w-8 h-8 bg-gray-8 hover:bg-gray-7 rounded-full border-[3px] border-white"
      >
        <Image src="/svg/swap.svg" width={12} height={14} />
      </button>
      <Row label="Pay With" currency="ETH" last />
    </div>
  );
};

export default CurrencySelect;
