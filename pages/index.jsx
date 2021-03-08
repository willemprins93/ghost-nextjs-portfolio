import Head from "next/head";
import Link from "next/link";
import styles from "styles/Home.module.scss";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Willem Prins</title>

        <meta property="og:image" content="self_cutout.png" key="ogimage" />
        <meta property="og:site_name" content="Willem Prins" key="ogsitename" />
        <meta property="og:title" content="Home" key="ogtitle" />
        <meta
          property="og:description"
          content="This is the home page of Willem Prins, a web developer from Amsterdam."
          key="ogdesc"
        />
      </Head>
      <h1>Hello!</h1>
      <h2>I am Willem. A web developer in London. Welcome to my website!</h2>
      <Link href="/about">
        <img src="self_cutout.png" alt="willem-portrait" />
      </Link>
    </div>
  );
};

export default Home;
