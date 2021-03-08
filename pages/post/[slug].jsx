import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "styles/Post.module.scss";

const BLOG_URL = process.env.BLOG_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

async function getPost(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${CONTENT_API_KEY}&include=tags`
  ).then((res) => res.json());

  return res.posts[0];
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post = (props) => {
  const { post } = props;

  const router = useRouter();
  console.log(post);

  if (router.isFallback) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.excerpt}`} />
      </Head>
      <img
        className={styles.featureImage}
        src={post.feature_image}
        alt={post.slug}
      />
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.tagContainer}>
        {post.tags.map((tag) => {
          return (
            <Link href={`/tag/${tag.slug}`} key={tag.slug}>
              <a className={styles.tag}>{tag.name}</a>
            </Link>
          );
        })}
      </div>
      <div className={styles.backButtonContainer}>
        <a className={styles.backButton} onClick={() => Router.back()}>
          Go Back
        </a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default Post;
