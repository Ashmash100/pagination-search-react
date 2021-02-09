import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filteredPost = currentPosts.filter( post => 
    post.name.toLowerCase().includes( search.toLowerCase() )
  )

  console.log(filteredPost)

  

  return (
    <div className='container'>
     <div class="input-group mb-5">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
  </div>
  
  <input type='text'  className='form-control' placeholder={search} onChange={ e => setSearch(e.target.value)} />
</div>

      
      <table id='table'>
        <thead>
          <th className='idpadding'>Id</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <Posts  loading={loading} filteredPost={filteredPost}  />
        
      </table>
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
