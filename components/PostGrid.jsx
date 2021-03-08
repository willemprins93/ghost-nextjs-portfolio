import Link from "next/link";
import Head from "next/head";
import styles from "styles/PostGrid.module.scss";
import { useState } from "react";

const PostGrid = ({ posts }) => {
  return (
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
  );
};

export default PostGrid;
