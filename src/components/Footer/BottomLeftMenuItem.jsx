import React from 'react';
import './Footer.css';

export default function BottomLeftMenuItem(props) {
  return (
    <div className='bottom-left-menu'>
        <a className='footer-link' href="#">
            {props.title}
        </a>
    </div>
  )
}
