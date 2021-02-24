import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Work.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  console.log(res);
  return res;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Work = (props) => {
  const posts = props.posts.posts;
  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Work</title>
      </Head>
      <h2>Here's what I've made:</h2>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post.id}>
            <div className={styles.postCard}>
              <img src={post.feature_image} />
              <h3>
                {post.title}
                <p className={styles.excerpt}>{post.excerpt}</p>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
