import React from 'react';
import Tr from './tr'
const Posts = ({ filteredPost, loading, }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
      <tbody id='tbody'>
       {filteredPost.map(post => (
        <Tr id={post.id} name={post.name} email={post.email} key={post.id} />       
      ))}
      </tbody>
  
      
  
  );
};

export default Posts;


