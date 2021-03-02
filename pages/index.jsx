import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Willem Prins</title>
      </Head>
      <h1>Hello! 👋</h1>
      <h2>I am Willem. A web developer in London. Welcome to my website!</h2>
      <Link href="/about">
        <img src="IMG_3930.jpeg" alt="willem-portrait" />
      </Link>
    </div>
  );
};

export default Home;
