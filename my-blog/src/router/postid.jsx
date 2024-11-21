// import { Form, useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getPost } from "../data/posts";

export async function loader({ params }) {
  const post = await getPost(params.postId);
  return { post };
}

export default function post() {
  const { post } = useLoaderData();
}
