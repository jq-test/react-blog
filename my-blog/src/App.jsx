// import ThemeToggle from "./contexts/ThemeToggle";

import { useEffect, Suspense, lazy } from "react";
import { RouterProvider} from "react-router-dom";
import { router } from "./router/index"
import { usePreferences } from "./contexts/PreferencesContext";
import LoadingSpinner from './components/LoadingState/LoadingState';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const BlogList = lazy(() => import('./pages/BlogList'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const Editor = lazy(() => import('./pages/Editor'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

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
    <ErrorBoundary>
    <Suspense fallback={<LoadingSpinner />}>
      <div className={`app ${preferences.reducedMotion ? 'reduced-motion': ''}`}>
        <main className="main-content">
          <RouterProvider router = {router} />
      </main>
    </div>
    </Suspense>
    </ErrorBoundary>
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