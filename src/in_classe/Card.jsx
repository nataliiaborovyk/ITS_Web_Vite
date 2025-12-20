import React from "react";

const Card = ({ p }) => {
  return (
    <div style={styles.card}>
      <h2>{p.title}</h2>
      <p>{p.body}</p>
      <small>{p.username}</small>
      <ul>
        {p.comments.map((c) => {
          return <li>{c.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
const styles={
    card:{
        backgroundColor: "white",
        border: "1px solid #c9c9c9",
        padding: "20px",
        borderRadius: "15px",

        maxWidth: "350px",
        boxShadow: "0 4px 8px rgb(0, 0, 0, 0.1)"
    }

}
