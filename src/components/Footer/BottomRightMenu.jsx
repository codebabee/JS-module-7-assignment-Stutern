import React from 'react'
import BottomRightMenuItem from './BottomRightMenuItem'

export default function BottomRightMenu() {
  return (
    <div  className='bottom-left-menu'>
      <BottomRightMenuItem title={"Privacy"} />
      <BottomRightMenuItem title={"Terms"} />
      <BottomRightMenuItem title={"Settings"} />
    </div>
  )
}
