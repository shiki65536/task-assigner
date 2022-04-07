import './Sidebar.css';

import React from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext'

function Sidebar() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='sidebar'>
      <section className='section'>
        <div className='section-center'>
          <div className="side-grid">
          <div className='greeting'>
            <div className='word'>
              hi! {user ? user.displayName : 'Guest'}
            </div>
            {!user ? null :
              <div className='pic'>
                <img
                  className='avatar'
                  src={user.photoURL}
                  alt={user.displayName}
                /></div>}

          </div>
          <div className='side-menu'>
            <ul>
              <li><Link to='/'><button className='side-btn'>home</button></Link></li>
              <li><Link to='/create'><button className='side-btn'>create</button></Link></li>
            </ul>
          </div>
          </div>
        

        </div>
      </section>
    </div>
  )
}

export default Sidebar