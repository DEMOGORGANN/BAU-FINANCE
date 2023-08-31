import React from "react";
import styles from "./CardPosition.module.css";
import cn from "classnames";

function CardPosition({ props }) {
  return (
    <div className={styles.CardPosition}>
      <div className={cn(styles.white, styles.title)}>Your position</div>
      <div className={styles.OneInf}>
        <div>{props.name}</div>
        <div>{props.fullLP} LP</div>
        <div>${props.fullmoney}</div>
        <div></div>
      </div>
      <div className={cn(styles.OneInf, styles.white)}>
        <div>Earned</div>
        <div>{props.earnedLp} LP</div>
        <div>${props.earnedMoney}</div>
        <div>+{props.stakeMoney}%</div>
      </div>
      <div className={styles.OneInf}>
        <div>Last harvest earnings</div>
        <div>{props.lastHarvLp} LP</div>
        <div>${props.lastHarv}</div>
        <div>+{props.stakeHarvMoney}</div>
      </div>
      <div className={styles.OneInf}>
        <div>Underlying</div>
        <div>{props.Underlying} DYDX</div>
        <div>{props.underlyingETH} ETH</div>
        <div></div>
      </div>
    </div>
  );
}

export default CardPosition;
