import { Link, Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>HOME</h1>
      <ul className='menu'>
        <li><Link to={'/'}>NEWS</Link></li>
        <li><Link to={'/friends'}>FRIENDS</Link></li>
        <li><Link to={'/app'}>APP 🔐</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default HomePage;
