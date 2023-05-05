import React from 'react'
import BottomLeftMenuItem from './BottomLeftMenuItem'

export default function BottomLeftMenu() {
  return (
    <div  className='bottom-left-menu'>
      <BottomLeftMenuItem title={"About"} />
      <BottomLeftMenuItem title={"Advertising"} />
      <BottomLeftMenuItem title={"Business"} />
      <BottomLeftMenuItem title={"How Search works"} />
    </div>
  )
}
