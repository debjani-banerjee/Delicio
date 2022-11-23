import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/tandoor.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>TANDOOR NIGHTS</h1>
      <span className={styles.price}>₹150-500</span>
      <p className={styles.desc}>WHO SAID NONE? YOU HAVE NUN</p>
    </div>
  )
}
