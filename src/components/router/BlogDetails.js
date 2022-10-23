import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogs } from './data';

const BlogDetails = () => {
  return (
    <div className='container --p'>
      <h1 className='--text-center'>Blog Details</h1>
      <p>Welcome to the blog details page.</p>
    </div>
  );
};

export default BlogDetails;
