import Head from "next/head";
import Link from "next/link";
import styles from "styles/Success.module.scss";

const Success = (props) => {
  // const posts = props.posts.posts;

  return (
    <div className={styles.container}>
      <Head>
        <title>Message sent</title>
      </Head>
      <h1>Thank you for your message! ✨</h1>
      <h2>I will get back to you soon.</h2>
      <Link href="/">
        <a className={styles.homeButton}>Back to the homepage</a>
      </Link>
    </div>
  );
};

export default Success;
