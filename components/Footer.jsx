import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill style={{objectFit:"contain"}} alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Where's The Good Food? Where's The Good Mood!!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurants</h1>
          <p className={styles.text}>
            51/K, G.T.road West
            <br />
            Searmpore, 712203
            <br />
            80172 66012
          </p>
          <p className={styles.text}>
            30, F005, Abhoy Guha Road
            <br />
            Liluah, 711204
            <br />
            87895 97247
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 23:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            9:00 - 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
