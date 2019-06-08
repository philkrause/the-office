import React from 'react'
import headerImage from './images/header.png'


export default function Header() {

  return (
    <div className='header-img-cont'>
      <img src={headerImage} />
      <p>Home</p>
      <p>Paper</p>
      <p>Employees</p>
      <p>About</p>
      <p>Help</p>
    </div>
  )


}