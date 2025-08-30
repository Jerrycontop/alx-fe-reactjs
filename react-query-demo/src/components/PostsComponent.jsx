// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // 👇 Caching demonstration
    staleTime: 5000, // data considered fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // data stays in cache for 5 minutes
    refetchOnWindowFocus: false, // don’t refetch on tab focus
    keepPreviousData: true, // keep old data when fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Posts</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>
      <ul className="list-disc pl-6">
        {data?.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-1">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
