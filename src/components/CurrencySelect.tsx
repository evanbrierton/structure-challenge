import Chevron from "./Chevron";

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
  return (
    <div
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
        <Chevron />
      </button>
    </div>
  );
};

const CurrencySelect = () => {
  return (
    <div className="flex flex-col justify-around w-[330px] h-[131px] rounded-xl border border-gray-6">
      <Row label="Buy" currency="BTC" first handleClick={() => {}} />
      <hr className="m-0 text-gray-6" />
      <button
        type="button"
        aria-label="swap"
        className="absolute ml-[235px] w-8 h-8 bg-gray-8 hover:bg-gray-7 rounded-full border-[3px] border-white"
      />
      <Row label="Pay With" currency="ETH" last />
    </div>
  );
};

export default CurrencySelect;
