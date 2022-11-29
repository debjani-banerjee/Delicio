import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
import ProductCard4 from "./ProductCard4";
import ProductCard5 from "./ProductCard5";
import ProductCard6 from "./ProductCard6";
import ProductCard7 from "./ProductCard7";

export default function ProductList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Doorstep Delivery!!</h1>
      <p className={styles.desc}>
       We know "A hungry man is always an angry man!!".
       So to kill that hunger, we Delicio brought you a new exprience of not only food delivering but also a unique and next level of taste!! We hope you enjoy the service and see you back again. Order now to make both of us happy!!  
      </p>
      <div className={styles.wrapper}>
        <ProductCard/>
        <ProductCard1/>
        <ProductCard2/>
        <ProductCard3/>
        <ProductCard4/>
        <ProductCard5/>
        <ProductCard6/>
        <ProductCard7/>
      </div>
    </div>
  )
}