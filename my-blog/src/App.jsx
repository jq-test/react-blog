import Header from "./components/Header";
import BlogList from "./components/BlogList/BlogList";
import PostEditor from "./components/PostEditor/PostEditor";
import { posts } from "./data/posts";
import { useState } from "react";
import { posts as initialPosts } from "./data/posts";

function App() {
  const [posts, setPosts] = useState(initialPosts);

  function addPost(post) {
    post.id = posts.length + 1;
    setPosts((prev) => [...prev, post]);
  }

  return (
    <>
      <div className="app">
        <Header />
        <main className="main-content">
          <PostEditor addPost={addPost}/>
          <BlogList posts={posts} />
      </main>
    </div>
    </>
  )
}

export default App
