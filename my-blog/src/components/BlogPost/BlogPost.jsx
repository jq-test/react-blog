import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./BlogPost.module.css";
import CommentSection from "../CommentSection/CommentSection";
import LikeButton from "../LikeButton/LikeButton";
import { calculateReadTime } from "../../utils/readTime";

function BlogPost({ id, title, content, author, date, isPublished }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    setReadTime(calculateReadTime(content));
  }, [content]);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayContent = isExpanded
    ? content
    : content.slice(0, 200) + (content.length > 200 ? "..." : "");

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

      <div className="blog-post__content">
        <p> {displayContent} </p>
        {content.length > 200 && (
          <button onClick={toggleContent} className={styles.postExpand}>
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <p> {isPublished ? "Published" : "Draft"} </p>
      <span className={styles.postAction}>
        <CommentSection postId={id} />
      </span>
      <LikeButton initialLikes={0} />
    </article>
  );
}

BlogPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isPublished: PropTypes.bool.isRequired,
};

export default BlogPost;
