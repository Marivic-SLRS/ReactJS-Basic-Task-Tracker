import Nav from './Components/Nav';
import Todo from './Components/Todo';
import './Assets/App.css';
import {List} from'./Content/Content';
import { useState } from 'react';


function App() {

  const [task, setTask] = useState([]);
  const [input , setInput] = useState('');
  const [showField , setShowField] = useState(false);


  return (
    <div className='card'>
      <List.Provider value={{task, setTask, input, setInput, showField , setShowField}}>
        <Nav/> 
        <Todo/>
      </List.Provider>
       
    
    </div>
    
  
  )
}

export default App;
