import React from 'react'
import NewToDo from './NewToDo'
import "../Assets/Nav.css";
import { List } from '../Content/Content';
import { useContext } from 'react';


function Nav() {

  const {setFilter} = useContext(List);

  const Pending = (e) => {
    e.preventDefault();
    setFilter('pending')
  }

  const All = (e) => {
    e.preventDefault();
    setFilter('all')
  }

  
  const Completed = (e) => {
    e.preventDefault();
    setFilter('completed')
  }


  
  return (
    <div className='navbar'>
        <div className='choices'>
            <p onClick={All}>All</p>
            <p onClick={Pending}>Pending</p>
            <p onClick={Completed}>Completed</p>
        </div>
        <div className='new'>
            <NewToDo/>
        </div>
    </div>
  )
}

export default Nav