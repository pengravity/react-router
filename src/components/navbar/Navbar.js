import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='--flex-center --p2 --bg-primary'>
      <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Blogs'>Blogs</Link> */}

        <NavLink
          to='/'
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Blogs'>Blogs</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
