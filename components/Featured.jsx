import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

export default function Featured() {
    const [index,setIndex] = useState(0)
  const images = [
    "/img/logo1.png",
    "/img/pic.png",
    "/img/daalroti.jpg",
    "/img/featured4.jpg",
  ];

  const handleArrow = (direction) => {
    if(direction === "l"){
        setIndex(index !== 0 ? index-1 : 3)
    }
    if(direction === "r"){
        setIndex(index !== 3 ? index+1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src="/img/slideL.png" alt role="presentation" width="100" height="100"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill style={{objectFit:"contain"}}/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src="/img/slideR.png" alt="" fill style={{objectFit:"contain"}}/>
      </div>
    </div>
  );
}
