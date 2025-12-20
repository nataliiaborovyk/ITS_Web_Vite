import React, { useEffect, useState } from 'react'
import Card from './Card';

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },}

const PostGreed = () => {
  const urlPosts = "https://jsonplaceholder.typicode.com/posts/";
      const urlUsers = "https://jsonplaceholder.typicode.com/users/";
      const urlCommenti = "https://jsonplaceholder.typicode.com/comments"; //?postId=1
      const [posts,setPosts]=useState([])
      async function deatilPosts(post) {
        const jsonUser = fetch(urlUsers + post.userId).then((resp) =>
          resp.json()
        );
        const jsonCommenti = fetch(urlCommenti + "?postId=" + post.id).then(
          (resp) => resp.json()
        );

        const [user, commenti] = await Promise.all([jsonUser, jsonCommenti]);

        const postPlus = {
          ...post,
          username: user.username,
          comments: commenti,
        };
        return postPlus;
      }

      async function loadPosts() {
        const response = await fetch(urlPosts);
        const posts = await response.json();

        const postsPlusPromise = posts.map((post) => deatilPosts(post));
        const postsPlus = await Promise.all(postsPlusPromise);
        
        setPosts(postsPlus);
      }
      useEffect(()=>{
        loadPosts()
      },[])
      
  return (
    <div style={styles.container}>
      {
        posts.map(p=>{
          return(

            <Card key={p.id} p={p}></Card>
            // <div>
            //   <h2>{p.title}</h2>
            //   <p>{p.body}</p>
            //   <small>{p.username}</small>
            //   <ul>
            //     {
            //       p.comments.map(c=>{
            //         return(
            //           <li>{c.name}</li>
            //         )
            //       })
            //     }
            //   </ul>
            // </div>
          )
        })
      }
    </div>
  )
}

export default PostGreed


uvb-hwaf-vvp