import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { STYLES } from './styles';

const Layout = () => {

  const navigate = useNavigate();

  return (
    <>    
      <h1 style={{ textAlign: 'center' }}>HEADER</h1>
      <nav style={STYLES.MENU}>
        <button 
          style={STYLES.BACK_BUTTON}
          onClick={() => navigate(-1)}
          title='back'
        >
          🚶‍♂️
        </button>
        <Link to={''}>main</Link>
        <Link to={'context'}>context</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout;
