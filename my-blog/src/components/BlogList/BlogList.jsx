import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useFilters } from "../../hooks/useFilters";
import { usePagination } from "../../hooks/usePagination";
import BlogSearch from "../BlogSearch/BlogSearch";
import BlogFilters from "../BlogFilters/BlogFilters";
import BlogPost from "../BlogPost/BlogPost";
import Pagination from "../Pagination/Pagination";
import "./BlogList.module.css";
import AnimatedList from "../AnimatedList/AnimatedList"

const POSTS_PER_PAGE = 5;

// function BlogList({ posts }) {
function BlogList() {
  const { posts: initialPosts } = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  
  useEffect(() => {
    const storedPosts = localStorage.getItem("blog_posts")
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts))
    }
  }, [])

  const {
    filters,
    handleFilterChange,
    filteredItems,
    categories,
    authors,
    allTags, 
  } = useFilters(posts);

  const {
    searchTerm,
    handleSearch,
    results: searchResults,
    isSearching, 
  } = useSearch(filteredItems);

  const {
    items: currentPosts,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNext,
    hasPrev,
  } = usePagination(searchResults, POSTS_PER_PAGE);

  return (
    <>
    <div className="blog-list-container">
      <div className="blog-controls">
        <BlogSearch
          searchTerm={searchTerm}
          onSearch={handleSearch}
          resultCount={searchResults.length}
        />
        <BlogFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          categories={categories}
          authors={authors}
          allTags={allTags}
        />
        {/* <button type="reset" className="blog-clear" value="Reset"> */}
      </div>

      {currentPosts.length > 0 ? (
        <>
          <div className="blog-posts">
          <AnimatedList
            items={currentPosts}
            renderItem={(post) => <BlogPost key={post.id} {...post} />}
            />
          </div>
          {/* <div className="blog-posts">
            {currentPosts.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div> */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
            hasNext={hasNext}
            hasPrev={hasPrev}
            // onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="no-results">No posts found matching your criteria.</div>
      )}
    </div>
    
 {/* const [currentPage, setCurrentPage] = useState(1); */}
 
   {/* const displayedPosts = searchResults;
   const totalPages = Math.ceil(displayedPosts.length / POSTS_PER_PAGE)
   const currentPosts = displayedPosts.slice(
     (currentPage - 1) * POSTS_PER_PAGE,
     currentPage * POSTS_PER_PAGE
   ); */}

    {/* <div className="blog-list">
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
    </div> */}
    </>
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