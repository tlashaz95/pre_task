import React from "react";
import { useState, useEffect } from "react";
import Posts from "./Posts";

const FetchAPI = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  if (posts.length === 0) {
    return <h2>No posts found.</h2>;
  }

  return (
    <section>
      <div className="container">
        {posts.map((post) => {
          return <Posts key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
};

export default FetchAPI;
