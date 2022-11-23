import React from "react";
import styles from "../styles/Login.module.css";
import Image from "next/image";

export default function Login() {
  return (
    <div className={styles.box}>
      <form className={styles.form} action="action_page.php" method="post">
        <div className={styles.imgcontainer}>
          <Image className={styles.avatar} src="/img/avatar.png" alt="" width="100" height="100" />
        </div>
        <div className={styles.container}>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required=""
            className={styles.text}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
            className={styles.password}
          />
          <button className={styles.button} type="submit">
            Login
          </button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />
            Remember me
          </label>
        </div>
        <div className={styles.container}>
          <button className={styles.cancelbutton} type="button">
            Register
          </button>
          <span className={styles.psw}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}
