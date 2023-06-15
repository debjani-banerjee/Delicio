import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

export default function ProductList({productList}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Doorstep Delivery!!</h1>
      <p className={styles.desc}>
       We know "A hungry man is always an angry man!!".
       So to kill that hunger, we Delicio brought you a new exprience of not only food delivering but also a unique and next level of taste!! We hope you enjoy the service and see you back again. Order now to make both of us happy!!  
      </p>
      <div className={styles.wrapper}>
        {productList.map((product)=> (
          <ProductCard key={product._id} product={product}/>
        ))}  
      </div>
    </div>
  )
}