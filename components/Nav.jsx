import CustomLink from "./CustomLink";
import Link from "next/link";
import { useRouter } from "next/router";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
  const router = useRouter();
  console.log(router);

  return router.pathname === "/" ||
    router.pathname === "/about" ||
    router.pathname === "/contact" ? (
    <nav className={navStyles.nav}>
      <Link href="/">
        <a>
          <h2>WILLEM PRINS</h2>
        </a>
      </Link>
      <ul>
        <li>
          <CustomLink href="/">
            <a>Home</a>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/about">
            <a>About</a>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/contact">
            <a>Contact</a>
          </CustomLink>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className={navStyles.nav}>
      <Link href="/">
        <a>
          <h2>WILLEM PRINS</h2>
        </a>
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
        <li>
          <CustomLink href="/contact">
            <a>Contact</a>
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
