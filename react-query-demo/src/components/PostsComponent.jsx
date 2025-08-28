import React from "react";
import { useQuery } from "react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes cache
    refetchOnWindowFocus: false, // don’t auto refetch when window is focused
    keepPreviousData: true, // keep old data while fetching new
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
