import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";

import styles from "styles/Contact.module.scss";

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
      USER_ID: process.env.EMAILJS_USER_ID,
    },
  };
};

const validateEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const Contact = (props) => {
  const router = useRouter();

  const { SERVICE_ID, TEMPLATE_ID, USER_ID } = props;

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateEmail(e.target.email.value) === false) {
      alert(`Invalid email entered.`);
      router.reload();
    } else {
      emailjs
        .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${USER_ID}`)
        .then(
          (result) => {
            console.log(result.text);
            router.push("/success");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta property="og:image" content="self_cutout.png" key="ogimage" />
        <meta property="og:site_name" content="Willem Prins" key="ogsitename" />
        <meta property="og:title" content="Contact" key="ogtitle" />
        <meta
          property="og:description"
          content="Contact page of Willem Prins, a web developer from Amsterdam."
          key="ogdesc"
        />
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
          <textarea name="message" rows="7" required />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
