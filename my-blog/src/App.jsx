import ThemeToggle from "./contexts/ThemeToggle";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index"
import { ThemeProvider } from "./contexts/ThemeProvider";
import { usePreferences } from "./contexts/PreferencesContext";

function App() {
  // const [posts, setPosts] = useState(initialPosts);
  // const { toggleTheme, isDark } = useTheme();
  const { preferences } = usePreferences(); 
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-font-size",
      preferences.fontSize
    );
    document.documentElement.setAttribute(
      "data-layout-density",
      preferences.layoutDensity
    );
  }, [preferences]);

  return (
    <>
      <ThemeProvider>
      <div className="app">
        <main className="main-content">
          <ThemeToggle />
          <RouterProvider router = {router} />
      </main>
    </div>
    </ThemeProvider>
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