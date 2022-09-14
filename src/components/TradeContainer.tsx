import { useState } from "react";
import Assets from "./Assets";
import Trade from "./Trade";

const TradeContainer = () => {
  enum DisplayState {
    TRADE,
    ASSETS,
  }

  const [display, setDisplay] = useState<DisplayState>(DisplayState.TRADE);

  if (display === DisplayState.TRADE) {
    return <Trade showAssets={() => setDisplay(DisplayState.ASSETS)} />;
  }

  return <Assets cancel={() => setDisplay(DisplayState.TRADE)} />;
};

export default TradeContainer;
