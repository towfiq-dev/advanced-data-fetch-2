import React from 'react';
// const getPosts = async()=>{
//   const postFetch = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return postFetch.json()
// }

const getPosts = async()=>{
   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // try{
  //   const dataFetch = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   return dataFetch.json()
  // }
  // catch(error){
  //   throw new Error("Failed to fetch posts");
    
  // }
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
    
  }
  return res.json()
}
const PostPage = async() => {
  const received = await getPosts()
  return (
    <div>
      <h1>{received.length}</h1>
    </div>
  );
};

export default PostPage;