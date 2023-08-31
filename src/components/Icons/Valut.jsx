import Eth from "./ETH.svg";
import Blue from "./Blue.svg";
import Curve from "./Curve.svg";
import Convex from "./Convex.svg";
import styles from "./icons.module.css";
import cn from "classnames";
import { useEffect } from "react";

import React from "react";

function Valut({ props }) {
  function Switch(nameIcon) {
    switch (nameIcon) {
      case "ETH":
        return (
          <div className={styles.Ics}>
            <img src={Eth} alt="icon" />
            ETH
          </div>
        );

      case "ETHBlue":
        return (
          <div className={styles.Ics}>
            <img src={Blue} alt="icon" />
            ETH / Blue
          </div>
        );
      case "Curve":
        return (
          <div className={styles.Ics}>
            <img src={Curve} alt="icon" />
            Curve
          </div>
        );
      case "Convex":
        return (
          <div className={styles.Ics}>
            <img src={Convex} alt="icon" />
            Convex
          </div>
        );
    }
  }

  return <div className={styles.Icons}>{Switch(props.name)}</div>;
}

export default Valut;
