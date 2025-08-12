import React from 'react'
import NewToDo from './NewToDo'
import "../Assets/Nav.css";

function Nav() {
  return (
    <div className='navbar'>
        <div className='choices'>
            <p>All</p>
            <p>Pending</p>
            <p>Completed</p>
        </div>
        <div className='new'>
            <NewToDo/>
        </div>
    </div>
  )
}

export default Nav