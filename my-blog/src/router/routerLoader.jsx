export async function blogLoader({ params }) {
    const response = await fetch(`/api/posts/${params.id}`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    return response.json();
  }
  