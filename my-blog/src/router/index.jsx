import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import BlogList from "../components/BlogList/Bloglist";
import PostEditor from "../components/PostEditor/PostEditor"
import NotFound from "../components/NotFound/NotFound";
import SavedDraft from "../components/PostEditor/SavedDrafts"
import { posts as initialPosts } from "../data/posts";
import { addPost } from "../utils/addPost";
import { getPost } from "../utils/getPost"
import PostDetail from "../components/PostDetail/PostDetail";
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
        element: <PostEditor addPost={addPost} posts={initialPosts}/>,
      },
      {
        path: "savedraft",
        element: <SavedDraft />
      }
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