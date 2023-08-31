import React from "react";
import styles from "./InfCardAPY.module.css";
import bgImg from "./bgImg.svg";

function InfCardAPY(props) {
  return (
    <div className={styles.InfCard}>
      <div className={styles.APY}>
        <span>APY</span>
        <div className={styles.information}>
          <div>
            Last harvest APY <span>{props.props.LastAPY}%</span>
          </div>
          <div className={styles.bord}></div>
          <div>
            Weeky <span>{props.props.WeekyInf}%</span>
          </div>
          <div className={styles.bord}></div>
          <div>
            Monthly <span>{props.props.MonthlyInf}%</span>
          </div>
        </div>
      </div>
      <img src={bgImg} alt="" />
    </div>
  );
}

export default InfCardAPY;
