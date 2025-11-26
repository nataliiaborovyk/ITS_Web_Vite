// src/Card.jsx
import React from "react";

const styles = {
  card: {
    backgroundColor: "white",
    border: "1px solid #c9c9c9",
    padding: "20px",
    borderRadius: "15px",
    maxWidth: "350px",
    boxShadow: "0 4px 8px rgb(0, 0, 0, 0.1)",
  },
  ul: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  li: {
    margin: "5px 0",
    padding: "2px 0",
  },
  p: {
    fontSize: "0.8rem",
  },
};

const Card = ({ post }) => {
  return (
    <div style={styles.card}>
      <h2>{post.title}</h2>
      <p style={styles.p}>{post.body}</p>
      <small>{post.user}</small>

      <ul style={styles.ul}>
        {post.comments.map((c) => (
          <li
            key={"c" + c.id}
            style={styles.li}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
