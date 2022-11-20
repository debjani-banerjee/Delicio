import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
              <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
              </div>   
            </td>
            <td>
              <span className={styles.name}>ABCD</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredient, Spicy Sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>₹119</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>₹238</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
              <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
              </div>
            </td>
            <td>
              <span className={styles.name}>WXYZ</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredient, Garlic Sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>₹119</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>₹238</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>₹188.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>₹50.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>₹188.00
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
