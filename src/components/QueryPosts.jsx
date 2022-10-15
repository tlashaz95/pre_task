import React from "react";
import { useQuery } from "react-query";
import Posts from "./Posts";

const url = "https://jsonplaceholder.typicode.com/posts";

const QueryPosts = () => {
  const { isLoading, error, data } = useQuery("posts", () => {
      return fetch(url).then((res) => {
          if(res.ok)
              return res.json()
          throw new Error("error loading data")
      });
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <section>
      <div className="container">
        {data.map((post) => {
          return <Posts key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
};

export default QueryPosts;
