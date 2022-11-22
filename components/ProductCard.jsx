import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza2.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>MAMMAMIA PIZA</h1>
      <span className={styles.price}>₹100-1000</span>
      <p className={styles.desc}>DEMBJANI AMNANYA AMGAL BAMGAL</p>
    </div>
  )
}
