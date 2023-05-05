import React from 'react'

export default function BottomRightMenuItem(props) {
  return (
    <div>
        <a className='footer-link' href="#">
            {props.title}
        </a>
    </div>
  )
}
