import Nav from './Components/Nav';
import Todo from './Components/Todo';
import './Assets/App.css';
import {List} from'./Content/Content';
import { useState } from 'react';


function App() {

  const [task, setTask] = useState([]);
  const [input , setInput] = useState('');
  const [showField , setShowField] = useState(false);
  const [filter , setFilter] = useState('all');


  return (
    <div className='card'>
      <List.Provider value={{task, setTask, input, setInput, showField , setShowField, filter , setFilter}}>
        <Nav/> 
        <Todo/>
      </List.Provider>
       
    
    </div>
    
  
  )
}

export default App;
