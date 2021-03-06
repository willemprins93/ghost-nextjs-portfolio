import Head from "next/head";
import Link from "next/link";
import styles from "styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta property="og:image" content="self_cutout.png" key="ogimage" />
        <meta property="og:site_name" content="Willem Prins" key="ogsitename" />
        <meta property="og:title" content="About" key="ogtitle" />
        <meta
          property="og:description"
          content="About page of Willem Prins, a web developer from Amsterdam."
          key="ogdesc"
        />
      </Head>
      <h1>About me ✍️</h1>
      <p>
        I am a creative minded and passionate web developer with a background in
        commercial photography. I have worked across international markets with
        people of different disciplines, developing a strong eye for design and
        detail along the way. I thrive in situations where I can produce
        creative solutions to complex problems.
      </p>
      <p>
        During my time as a photographer I have always felt a strong curiosity
        towards tech and digital media. And, wanting to challenge myself to
        broaden my technical skillset, I discovered web-development to be the
        perfect marriage between logic, design and creative thinking. I joined
        Ironhack shortly after where I honed my skills in Javascript, HTML, CSS,
        MongoDB, Express, React, Node and more, in preparation for the next big
        step in my career.
      </p>
      <p>
        My goal is to be able to design elegant and fully responsive web
        applications front-to-back by learning the latest and most relevant
        technologies, to optimise and rethink the way we interact with
        technology in everyday life. I'm currently searching for a developer
        role where I can give 110% every day to work on creating compelling and
        meaningful projects!
      </p>
      <Link href="/work">
        <a>Click here to see my work!</a>
      </Link>
    </div>
  );
};

export default About;
