import React from "react";
import "./styles/global.css";
import Valut from "./components/Icons/Valut";
import Logo from "./components/logo/logo";
import InfCardAPY from "./components/Cards/CardAPI/InfCardAPY";
import CardPosition from "./components/Cards/CardPosition/CardPosition";

function App() {
  return (
    <div className="App">
      <Valut props={{ name: "ETH" }} />
      <Valut props={{ name: "ETHBlue" }} />
      <Valut props={{ name: "Curve" }} />
      <Valut props={{ name: "Convex" }} />
      <Logo props={{ theme: "dark", position: "gorisont" }} />
      <Logo props={{ theme: "light", position: "vertikal" }} />
      <Logo props={{ theme: "dark", position: "vertikal" }} />
      <Logo props={{ theme: "light", position: "gorisont" }} />
      <InfCardAPY props={{ LastAPY: 7, WeekyInf: 5, MonthlyInf: 9 }} />
      <CardPosition
        props={{
          name: "Curve COILFRAX-f",
          fullLP: 12.865,
          fullmoney: 568,
          earnedLp: 1.325,
          earnedMoney: 25,
          stakeMoney: 5,
          lastHarvLp: 0.015,
          lastHarv: 3,
          stakeHarvMoney: 0.03,
          Underlying: 67,
          underlyingETH: 0.2,
        }}
      />
    </div>
  );
}

export default App;
