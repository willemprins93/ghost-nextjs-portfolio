import Link from "next/link";
import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <nav className={footerStyles.footer}>
      <h3>© WILLEM PRINS 2021</h3>
      <h4>Built on Ghost CMS and Next.js</h4>
      <ul>
        <li>
          <Link href="mailto:willemprins93@gmail.com">
            <a>E-mail</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/willem-prins-dev/">
            <a>LinkedIn</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
