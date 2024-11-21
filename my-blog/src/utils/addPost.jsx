// import { useLoaderData } from "react-router-dom";

export function addPost(post) {
    // const { posts } = useLoaderData();
    post.id = posts.length + 1;
    setPosts((prev) => [...prev, post]);
}