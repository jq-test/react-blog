import { posts as initialPosts } from "../data/posts";

export const getPost = async (postId) => {
  const post = initialPosts.find((post) => post.id === parseInt(postId, 10));
  return post;
};
