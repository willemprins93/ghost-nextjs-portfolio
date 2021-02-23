import Link from "next/link";
import Head from "next/head";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <nav className={footerStyles.footer}>
      <div className={footerStyles.column}>
        <div className={footerStyles.innerColumn}>
          <h3>© WILLEM PRINS 2021</h3>
          <h4>Built on Ghost CMS and Next.js</h4>
        </div>
      </div>
      <div className={footerStyles.column}>
        <div
          className={`${footerStyles.innerColumn} ${footerStyles.iconColumn}`}
        >
          <Link href="mailto:willemprins93@gmail.com">
            <a className={footerStyles.contactIcon}>
              <i aria-hidden className="far fa-envelope"></i>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/willem-prins-dev/">
            <a className={footerStyles.contactIcon}>
              <i aria-hidden className="fab fa-linkedin-in"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className={footerStyles.column}>
        <div className={footerStyles.innerColumn}>
          <h4></h4>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
