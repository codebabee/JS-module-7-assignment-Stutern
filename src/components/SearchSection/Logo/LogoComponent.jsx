import React from 'react'
import Logo from './images/googlelogo.png'
import './LogoComponent.css'

export default function LogoComponent() {
  return (
    <div><img src={Logo} alt={"google logo"} /></div>
  )
}
