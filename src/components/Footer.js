import React from 'react';
import './Footer.css';

function Footer() {
  const time = new Date().getFullYear();
  return (
    <div className='footer'>{time}&copy;shiki65536</div>
  )
}

export default Footer