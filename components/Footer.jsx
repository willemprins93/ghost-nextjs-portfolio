import Link from "next/link";
import Head from "next/head";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <nav className={footerStyles.footer}>
      <div className={footerStyles.column}>
        <div className={footerStyles.innerColumn}>
          <h3>© WILLEM PRINS 2021</h3>
          <h4>
            Built on <a href="https://ghost.org/">Ghost</a> and{" "}
            <a href="https://nextjs.org/">Next.js</a>
          </h4>
        </div>
      </div>
      <div className={footerStyles.column}>
        <div
          className={`${footerStyles.innerColumn} ${footerStyles.iconColumn}`}
        >
          <Link href="mailto:willemprins93@gmail.com">
            <a className={footerStyles.contactIcon}>
              <img src="/mail.svg" alt="mail.svg" />
              {/* <i aria-hidden className="far fa-envelope"></i> */}
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/willem-prins-dev/">
            <a className={footerStyles.contactIcon}>
              <img src="/linkedin.svg" alt="linkedin.svg" />
              {/* <i aria-hidden className="fab fa-linkedin-in"></i> */}
            </a>
          </Link>
          <Link href="https://github.com/willemprins93">
            <a className={footerStyles.contactIcon}>
              <img src="/github.svg" alt="github.svg" />
              {/* <i aria-hidden className="fab fa-linkedin-in"></i> */}
            </a>
          </Link>
        </div>
      </div>
      <div className={footerStyles.column}>
        <div className={footerStyles.innerColumn}>
          <h4>Feel free to drop me a message anytime!</h4>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
