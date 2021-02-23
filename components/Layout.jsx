import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/c6f84c5c84.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
