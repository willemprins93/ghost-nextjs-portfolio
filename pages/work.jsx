import Link from "next/link";
import Head from "next/head";
import PostGrid from "components/PostGrid";

import styles from "styles/PostGrid.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  return res;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Work = (props) => {
  const posts = props.posts.posts.sort((post) => (post.featured ? -1 : 1));

  return (
    <div className={styles.container}>
      <Head>
        <title>Work</title>
        <meta property="og:image" content="self_cutout.png" key="ogimage" />
        <meta property="og:site_name" content="Willem Prins" key="ogsitename" />
        <meta property="og:title" content="Work" key="ogtitle" />
        <meta
          property="og:description"
          content="Portfolio of Willem Prins, featuring a range of web dev projects."
          key="ogdesc"
        />
      </Head>
      <h2>Here's what I've been working on: </h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default Work;
