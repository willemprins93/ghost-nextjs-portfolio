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

async function getTags() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/tags/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  return res.tags;
}

export const getStaticPaths = async () => {
  const tags = await getTags();
  const slugs = tags.map((tag) => tag.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts(params.slug);

  return {
    props: { posts, slug: params.slug },
  };
};

const Tag = (props) => {
  const { posts, slug } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h2>Projects tagged: {slug}</h2>
      <PostGrid posts={posts} />
    </div>
  );
};

export default Tag;
