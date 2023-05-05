import React from 'react';
import Carbon from './images/download.png';
import './Footer.css';

export default function FooterText() {
  return (
    <div className='carbon-text'>
      <img className='footer-img' src={Carbon} alt={"Image of carbon"} />
      <a className='footer-link' href="#"> Carbon neutral since 2007</a>
    </div>
  )
}
