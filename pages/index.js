import Head from "next/head";
import Image from "next/image";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

export default function Home({productList}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Delicio!</title>
        <meta name="description" content="Door-Step Food Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddButton setClose={setClose} />}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
