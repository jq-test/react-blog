import Header from "./components/Header";
import BlogList from "./components/BlogList/BlogList";
import PostEditor from "./components/PostEditor/PostEditor";
import { posts } from "./data/posts";

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <main className="main-content">
          <PostEditor />
          <BlogList posts={posts} />
      </main>
    </div>
    </>
  )
}

export default App
