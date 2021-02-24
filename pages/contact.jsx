import Head from "next/head";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Name:</label>
          <input type="text" name="name" />
        </p>
        <p>
          <label>Email:</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default About;
