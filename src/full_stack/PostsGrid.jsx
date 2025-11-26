// src/PostsGrid.jsx
import React, { useEffect, useState } from "react";
import Card from "./Card";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
};

const PostsGrid = () => {
  const urlPosts = "https://jsonplaceholder.typicode.com/posts/";
  const urlUsers = "https://jsonplaceholder.typicode.com/users/";
  const urlCommenti = "https://jsonplaceholder.typicode.com/comments";

  const [posts, setPosts] = useState([]);

  // funzione che arricchisce un singolo post con user e comments
  async function fetchDetailsPost(post) {
    // console.log("post", post);

    const userP = fetch(urlUsers + post.userId).then((resp) =>
      resp.json()
    );
    const commentiP = fetch(
      urlCommenti + "?postId=" + post.id
    ).then((resp) => resp.json());

    const [user, comments] = await Promise.all([userP, commentiP]);

    return {
      ...post,
      user: user.name,
      comments: comments,
    };
  }

  // creare la funzione per leggere tutti i posts
  async function loadAllPosts() {
    try {
      const response = await fetch(urlPosts);

      if (!response.ok) {
        throw new Error(
          "Errore nella chiamata a " + urlPosts
        );
      }

      const allPosts = await response.json();

      const allDataPromise = allPosts.map((post) =>
        fetchDetailsPost(post)
      );

      const allData = await Promise.all(allDataPromise);

      setPosts(allData);
    } catch (err) {
      console.error("Errore nel caricamento dei dati " + err);
    }
  }

  useEffect(() => {
    loadAllPosts();
  }, []);

  return (
    <div style={styles.container}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
