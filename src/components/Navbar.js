import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { VscSquirrel } from 'react-icons/vsc';
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext';

function Navbar() {
  const { user } = useAuthContext();
  const {logout} = useLogout();

  return (
    <div className='navbar'>
      <section className='section'>
        <div className='section-center'>
          <div className='navbar-menu'>
          <div className='logo'>
            <VscSquirrel /> <h2>Task Assigner</h2>
          </div>
          <div className='header'>
            <ul>
              {user ? null :
                <>
                  <li><Link to='/sigup'><button className='nav-btn'>Signup</button></Link></li>
                  <li><Link to='/login'><button className='nav-btn'>Login</button></Link></li>
                </>
              }
              {!user ? null :
                <li><button className='nav-btn' onClick={() => logout()}>Logout</button></li>}

            </ul>
          </div>
          </div>



        </div>

      </section>

    </div>
  )
}

export default Navbar