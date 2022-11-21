import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>MOMOMIA</h1>
      <span className={styles.price}>$12.50</span>
      <p className={styles.desc}>DEMBJANI AMNANYA AMGAL BAMGAL</p>
    </div>
  )
}
