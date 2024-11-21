import { RouterProvider } from "react-router-dom";
import { router } from "./router/index"


function App() {
  // const [posts, setPosts] = useState(initialPosts);
  
  return (
    <>
      <div className="app">
        <main className="main-content">
          <RouterProvider router = {router} />
      </main>
    </div>
    </>
  )
}

export default App

// import Header from "./components/Header";
// import BlogList from "./components/BlogList/BlogList";
// import PostEditor from "./components/PostEditor/PostEditor";
// import { posts } from "./data/posts";
// import { useState } from "react";
// import { posts as initialPosts } from "./data/posts";

{/* <Header /> */}
  {/* <PostEditor addPost={addPost}/> */}
  {/* <BlogList posts={posts} /> */}