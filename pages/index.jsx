import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=id,title,slug,feature_image,custom_excerpt`
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

const Home = (props) => {
  const posts = props.posts.posts;
  console.log(posts);

  return (
    <div className={styles.container}>
      <h1>Welcome to my website!</h1>
      <h2>This website is currently under construction...</h2>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <Link href={`/post/${post.slug}`} key={post.id}>
            <div className={styles.postCard}>
              <img src={post.feature_image} />
              <h3>{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
