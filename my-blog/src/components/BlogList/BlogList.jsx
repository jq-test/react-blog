import PropTypes from "prop-types";
import BlogPost from "../BlogPost/BlogPost";
import "./BlogList.module.css";

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          id={post.id}
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
          readTime={post.readTime}
          isPublished={post.isPublished}
        />
      ))}
    </div>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      readTime: PropTypes.number.isRequired,
      isPublished: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default BlogList;