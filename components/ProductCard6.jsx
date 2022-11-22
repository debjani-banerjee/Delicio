
import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/rice.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>CHAWAL</h1>
      <span className={styles.price}>₹100-1000</span>
      <p className={styles.desc}>DEMBJANI AMNANYA AMGAL BAMGAL</p>
    </div>
  )
}
