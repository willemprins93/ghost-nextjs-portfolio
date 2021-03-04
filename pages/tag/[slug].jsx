import Link from "next/link";
import Head from "next/head";
import PostGrid from "../../components/PostGrid";
import styles from "../../styles/PostGrid.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPosts(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&filter=tags:${slug}`
  ).then((res) => res.json());

  return res.posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts(params.slug);

  return {
    props: { posts, slug: params.slug },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Tag = (props) => {
  //   const posts = props.posts.sort((post) => (post.featured ? -1 : 1));
  const { posts, slug } = props;

  return (
    <div className={styles.container}>
      <h2>Projects tagged: {slug}</h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default Tag;
