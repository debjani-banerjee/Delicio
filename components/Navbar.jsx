import React from 'react';
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Login from '../pages/login';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/phone.png" alt="" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>8240783996</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Contact</li>
                    <Link href="/login" passHref><li className={styles.listItem}>Login</li></Link>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="50" height="50"/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};
 
export default Navbar;
