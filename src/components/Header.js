import React from 'react'
import headerImage from './images/header.png'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className='head'>
      <img src={headerImage} />
      <Link to={{
        pathname: '/'
      }}><p>Home</p></Link>
      <p>Paper</p>
      <Link to={{
        pathname: '/AddEmployee'
      }}><p>Add Employee</p></Link>
      <Link to={{
        pathname: '/EmployeeList'
      }}><p>Employee List</p></Link>
      <p>Help</p>
    </div>
  )


}