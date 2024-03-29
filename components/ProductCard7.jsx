import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/idli.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>AIYO IDLI-DOSA</h1>
      <span className={styles.price}>₹75-500</span>
      <p className={styles.desc}>FROM SOUTH TO YOUR MOUTH</p>
    </div>
  )
}
