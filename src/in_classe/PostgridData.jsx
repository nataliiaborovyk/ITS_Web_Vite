import React, { useState } from 'react'

const PostgridData = () => {
const urlPosts = "https://jsonplaceholder.typicode.com/posts/";
const urlUsers = "https://jsonplaceholder.typicode.com/users/";
const urlCommenti = "https://jsonplaceholder.typicode.com/comments"; //?postId=1

const [posts, setPosts] = useState([])

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
        // divContainer.innerHTML = "";
        // postsPlus.forEach((post) => {
        //     const commentiHtml=post.comments.map(c=>'<li>'+c.name+'</li>').join("")
        //   divContainer.innerHTML += `
        //   <div class="card">
        //          <h2>${post.title}</h2>
        //         <p>${post.body}</p>
        //           <small>${post.username}</small>
        //           <ul>${commentiHtml}</ul>
        //         </div>
        //         `;
        // });
        setPosts(postsPlus);
      }
      useEffect(()=>{
        loadPosts()
      }, [])


  return (
    <div>
        {
            posts.map(p=>{
                return (
                    <div>
                        <h2>
                            {p.title}
                        </h2>
                        <p>
                            {p.body}
                        </p>
                        <small>
                            {p.username}
                        </small>
                        <ul>
                            {
                                p.comments.map(c=>{
                                    return(
                                        <li>
                                            {c.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostgridData