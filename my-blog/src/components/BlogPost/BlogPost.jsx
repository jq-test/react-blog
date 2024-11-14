import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./BlogPost.module.css";
import { calculateReadTime } from "../../utils/readTime";
function BlogPost({ title, content, author, date, readTime }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    setReadTime(calculateReadTime(content));
  }, [content]);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayContent = isExpanded
    ? content : content.slice(0, 200) + (content.length > 200 ? "..." : "");

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

      <div classNAme="blog-post__content">
        <p> {displayContent} </p>
        {content.length > 200 && (
          <button onClick={toggleContent} classNAme="blog-post__expand">
            { isExpanded ? "Read less" : "Read more" }
          </button>
        )}
      </div>
      
      <div className={styles.blogContent}>{content}</div>
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