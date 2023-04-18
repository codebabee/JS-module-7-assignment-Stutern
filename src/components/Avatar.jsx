import React from 'react'
import AvatarImage from '../images/image-jonathan.jpg'

export default function Avatar() {
  return (
    <div>
      <div><img src={AvatarImage} alt="avatar image" style={{width:"20px", borderRadius:"40px"}} /></div>
    </div>
  )
}
