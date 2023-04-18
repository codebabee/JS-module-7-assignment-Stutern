import React from 'react'
import Carbon from '../images/download.png'

export default function FooterText() {
  return (
    <div>
      <img src={Carbon} alt={"Image of carbon"} />
      <a href="#">Carbon neutral since 2007</a>
    </div>
  )
}
