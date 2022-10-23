import { Link } from 'react-router-dom';

import { blogs } from './data';

const Blogs = () => {
  return (
    <div className='container'>
      <div className='--center-all'>
        <h1>Blogs</h1>
        <p>
          Welcome to the <b>Blog</b> page
        </p>
      </div>
      <article>
        {blogs.map((blog) => {
          const { author, details, id, title } = blog;
          return (
            <div key={id} className='--card --m --p'>
              <h4>{title}</h4>
              <p>By {author}</p>
              <Link to={`/blog/${id}`}>Read More</Link>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Blogs;
