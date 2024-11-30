import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../BlogPost/BlogPost.module.css";
import CommentSection from "../CommentSection/CommentSection";
import LikeButton from "../LikeButton/LikeButton";
import PageTransition from "../PageTransition/PageTransition";

function PostDetail() {
  const { post } = useLoaderData();

  return (
    <PageTransition>
    <article className={styles.blogPost}>
      <div className={styles.postHeader}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <div className={styles.postMeta}>
          <span className={styles.postAuthor}>By {post.author}</span>
          <time className={styles.postDate}>{post.date}</time>
          <span className={styles.postReadTime}>{post.readTime} min read</span>
        </div>
      </div>
      <div className="blog-post__content">
        <p> {post.content} </p>
      </div>
      <br></br>
      <p> {post.isPublished ? "Published" : "Draft"} </p>
      <span className={styles.postAction}>
        <CommentSection postId={post.id} />
      </span>
      <LikeButton initialLikes={0} />
    </article>
    </PageTransition>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.number.isRequired,
    isPublished: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostDetail;
