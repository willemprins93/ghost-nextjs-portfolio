import CustomLink from "./CustomLink";
import Link from "next/link";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <h2>WILLEM PRINS</h2>
      </Link>
      <ul>
        <li>
          <CustomLink href="/">
            <a>Home</a>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/work">
            <a>Work</a>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/about">
            <a>About</a>
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
