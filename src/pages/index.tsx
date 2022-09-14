/**
 * @component
 */

import Navbar from "@/components/Navbar";
import Trade from "@/components/Trade";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />

      <div className="w-full max-w-desktop">
        {/* Breadcrumbs */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex gap-2 items-center my-6 desktop:mb-8">
            <li>All Assets</li>
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              className="shrink-0"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Chevron</title>
              <path d="M1 1L8 8L1 15" strokeLinecap="round" />
            </svg>{" "}
            <li>Bitcoin</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="flex justify-between mb-4">
          <div className="flex flex-col mobile:flex-row mobile:gap-2 mobile:items-center">
            <div className="hidden w-8 h-8 mobile:inline">
              <div className="w-8 h-8 bg-white rounded-full border border-gray-6" />
            </div>
            <h3 className="text-header-3 font-medium tracking-tight leading-7 mobile:leading-[unset]">
              Bitcoin
            </h3>
            <p className="relative top-[2px] leading-7 mobile:leading-[unset]">
              BTC
            </p>
          </div>

          {/* Share Icons */}
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center w-8 h-8 bg-gray-6 !rounded-full" />
            <div className="flex justify-center items-center w-8 h-8 bg-gray-6 !rounded-full" />
          </div>
        </div>

        <div className="flex justify-between mb-4">
          {/* Graph Placeholder */}
          <div className="w-[780px] h-[455px] bg-gray-6 rounded-xl" />

          <Trade />
        </div>

        <div className="flex justify-between">
          {/* Stats Placeholder */}
          <div className="flex basis-2/3 flex-col max-w-[780px]">
            <div className="mb-4 w-[120px] h-[32px] bg-gray-6 rounded-lg" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[120px] h-[32px] bg-gray-6 rounded-lg" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />

            <div className="mb-4 w-[780px] h-[136px] bg-gray-6 rounded-xl" />
          </div>

          {/* Trending Placeholder */}
          <div className="w-[380px] h-[708px] bg-gray-6 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
