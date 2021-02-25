import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";

import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const router = useRouter();
  const recaptchaRef = React.createRef();
  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const user_id = process.env.EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target);

    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
        router.push("/success");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Thoughts? Questions? 🍩? Send me a message!</h1>
      <form name="contact" method="POST" onSubmit={sendEmail} action="/about">
        <input type="hidden" name="contact-form" value="contact" />
        <p>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input type="text" name="name" required />
        </p>
        <p>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">
            Message <span>*</span>
          </label>
          <textarea name="message" rows="8" required />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
