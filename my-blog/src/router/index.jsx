import { createBrowserRouter } from "react-router-dom";
import { posts as initialPosts } from "../data/posts";
import { addPost } from "../utils/addPost";
import { getPost } from "../utils/getPost";
import Layout from "../components/Layout/Layout";
import BlogList from "../components/BlogList/Bloglist";
import PostEditor from "../components/PostEditor/PostEditor";
import NotFound from "../components/NotFound/NotFound";
import SavedDraft from "../components/PostEditor/SavedDrafts";
import Settings from "../settings/Settings";
import PostDetail from "../components/PostDetail/PostDetail";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Login from "../pages/Login";
import GuestRoute from "../components/ProtectedRoute/GuestRoute";
// import Root from "../router/root"
// import NewPost from "../components/NewPost/NewPost";
// import EditPost from "../components/EditPost/EditPost";
// import Profile from "../components/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //Contains Nav, Outlet, Sidebar
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <BlogList />,
        loader: () => ({ posts: initialPosts }),
        // loader: () => ({ posts }),
      },
      {
        path: "posts/:postid",
        element: <PostDetail />,
        loader: async ({ params }) => {
          const post = await getPost(params.postid);
          return { post };
        },
      },
      {
        // path: ":id/edit",
        path: "newpost",
        // element: <PostEditor addPost={addPost}/>,
        element: (
          <ProtectedRoute>
            <PostEditor addPost={addPost} posts={initialPosts} />
          </ProtectedRoute>
        ),
      },
      {
        path: "savedraft",
        element: (
          <ProtectedRoute>
            <SavedDraft />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
            <Settings />
        ),
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
    ],
  },
]);
// path: "posts",
// children: [
//   {
//     index: true,
//     element: <BlogList posts={posts}/>,
//   }
//   {
//     path: ":id",
//     element: <PostDetail />,
//   },
//   {
//     path: "new",
//     element: <NewPost />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
// ],
//   },
