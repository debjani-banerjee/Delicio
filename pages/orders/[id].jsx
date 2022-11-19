import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

export default function Order() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customemr</th>
              <th> Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>3119</span>
              </td>
              <td>
                <span className={styles.name}>Harry Potter</span>
              </td>
              <td>
                <span className={styles.address}>37/L, Kolkata-700001</span>
              </td>
              <td>
                <span className={styles.total}>₹238</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={styles.status}>
            <Image src="/img/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={styles.status}>
            <Image src="/img/bake.png" alt="" width={30} height={30} />
            <span>Baking</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={styles.status}>
            <Image src="/img/bike.png" alt="" width={30} height={30} />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={styles.status}>
            <Image src="/img/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}
