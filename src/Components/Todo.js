import React from 'react'
import '../Assets/Todo.css';
import { List } from '../Content/Content';
import { useContext } from 'react';

function Todo() {

  const {task,setTask,filter} = useContext(List);


  const filteredTasks = task.filter( t => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !t.completed;
    if (filter === 'completed') return t.completed;
  })

  const toggleCompleted = (i) => {
    const tasks = [...task];
    tasks[i] = {
      ...tasks[i] ,
      completed: !tasks[i].completed
    };
    setTask(tasks);
  }


  return (
    <div className='insides'>
       {filteredTasks.map((t, i) => (
        <div key={i} className='batch'>
          <label>
             <input
              type='checkbox'
              checked={t.completed}
              onChange={() => toggleCompleted(i)}/>
              {t.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Todo