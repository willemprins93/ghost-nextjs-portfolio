import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => console.log("success"))
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <div className={styles.container}>
        <Head>
          <title>Contact</title>
        </Head>
        <form
          name="contact"
          method="POST"
          onSubmit={this.handleSubmit}
          action="/about"
        >
          <input type="hidden" name="contact-form" value="contact" />
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;
