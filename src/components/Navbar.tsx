import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const userInitials = "TE";
  const actions = ["Deposit", "Withdraw", "Trade"];
  const [active, setActive] = useState(2);

  const renderButtons = () => {
    return (
      <div>
        {actions.map((action, i) => (
          <button
            key={action}
            type="button"
            className={`${
              i === active ? "text-white bg-black" : "text-black bg-transparent"
            } rounded-lg py-2 px-6 font-medium`}
            onClick={() => setActive(i)}
          >
            {action}
          </button>
        ))}
      </div>
    );
  };

  const renderUserIcon = () => (
    <div className="flex justify-center items-center w-8 h-8 bg-gray-6 !rounded-full">
      {userInitials}
    </div>
  );

  return (
    <header className="flex justify-center px-4 w-full h-[79px] bg-white border-b border-gray-6 mobile:px-8 mobile:h-[69px] tablet:px-10">
      <div className="flex justify-between items-center w-full max-w-desktop">
        <Image src="/svg/logo.svg" width={130} height={32} />
        <div>
          <nav className="flex gap-4">
            {renderButtons()}
            {renderUserIcon()}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
