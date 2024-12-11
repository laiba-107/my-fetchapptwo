import React, { useState, useEffect, useCallback } from 'react';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, ...data]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadPosts();
  }, [page, loadPosts]);

  const handleScroll = (e) => {
    if (
      e.target.documentElement.scrollTop + window.innerHeight === e.target.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {loading && <div>Loading more posts...</div>}
    </div>
  );
};

export default InfiniteScroll;
