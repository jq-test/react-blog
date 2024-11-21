import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import Navigation from "../components/Navigation/Navigation";
import BlogList from "../components/BlogList/Bloglist";
import PostEditor from "../components/PostEditor/PostEditor"
import NotFound from "../components/NotFound/NotFound";
import { posts } from "../data/posts"
// import { posts as initialPosts } from "../data/posts";
import { addPost } from "../utils/addPost";
// import PostDetail from "../components/PostDetail/PostDetail";
// import NewPost from "../components/NewPost/NewPost";
// import EditPost from "../components/EditPost/EditPost";
// import Profile from "../components/Profile/Profile";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <BlogList />,
        loader: () => ({ posts }),
      },
    //   {
    //     path: "posts",
    //     element: <BlogList posts={posts}/>
    //   },
      {
        // path: ":id/edit",
        path: "newPost",
        element: <PostEditor addPost={addPost}/>,
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