import Image from 'next/image';
import React from 'react'
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";

export default function ProductCard({product}) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} passHref>
      <Image src={product.img} alt="" width="200" height="200" />
      </Link>
      
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>₹{product.prices[0]}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  )
}