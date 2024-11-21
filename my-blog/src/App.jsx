// import Header from "./components/Header";
// import BlogList from "./components/BlogList/BlogList";
// import PostEditor from "./components/PostEditor/PostEditor";
// import { posts } from "./data/posts";
// import { useState } from "react";
// import { posts as initialPosts } from "./data/posts";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/index"


function App() {
  // const [posts, setPosts] = useState(initialPosts);

  return (
    <>
      <div className="app">
        {/* <Header /> */}
        <main className="main-content">
          <RouterProvider router = {AppRouter} />
          {/* <PostEditor addPost={addPost}/> */}
          {/* <BlogList posts={posts} /> */}
      </main>
    </div>
    </>
  )
}

export default App
