import PropTypes from "prop-types";
import styles from "./BlogPost.module.css";
import CommentSection from "../CommentSection/CommentSection";  

function BlogPost({ title, content, author, date, readTime }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.postHeader}>
        <h2 className={styles.postTitle}>{title}</h2>
        <div className={styles.postMeta}>
          <span className={styles.postAuthor}>By {author}</span>
          <time className={styles.postDate}>{date}</time>
          <span className={styles.postReadTime}>{readTime} min read</span>
        </div>
      </div>
      <div className={styles.blogContent}>{content}</div>
      
      <CommentSection postId={id} />

    </article>

  );
}

BlogPost.propTypes = {
  title: PropTypes.string.required,
  content: PropTypes.string.required,
  author: PropTypes.string.required,
  date: PropTypes.string.required,
  readTime: PropTypes.number.required,
};

export default BlogPost;