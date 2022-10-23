import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='--flex-center --p2 --bg-primary'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Blogs'>Blogs</Link>
      </nav>
    </div>
  );
};

export default Navbar;
