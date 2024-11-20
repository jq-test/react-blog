import Header from "./components/Header";
import BlogList from "./components/BlogList/BlogList";
import PostEditor from "./components/PostEditor/PostEditor";
import { posts } from "./data/posts";
import { useState } from "react";
import { posts as initialPosts } from "./data/posts";
import BlogSearch from "./components/BlogSearch/BlogSearch";
import BlogFilters from "./components/BlogFilters/BlogFilters";
// import Pagination from "./components/Pagination/Pagination";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  // const filters = {
  //   category: "React", 
  //   author: "Bob Joe",
  //   tags: ["React", "JavaScript"],
  // }

  // const categories = ["React"]
  // const authors = ["Bob Joe"]
  // const allTags = ["React"]

  function addPost(post) {
    post.id = posts.length + 1;
    setPosts((prev) => [...prev, post]);
  }

  return (
    <>
      <div className="app">
        <Header />
        <BlogSearch />
        <BlogFilters />
        <main className="main-content">
          <PostEditor addPost={addPost}/>
          {/* <Pagination /> */}
          <BlogList posts={posts} />
      </main>
    </div>
    </>
  )
}

export default App
