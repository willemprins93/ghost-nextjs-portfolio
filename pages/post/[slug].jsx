import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Post.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPost(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  return res.posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <img className={styles.featureImage} src={post.feature_image} />
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.backButtonContainer}>
        <Link href="/">
          <a className={styles.backButton}>Go Back</a>
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default Post;
