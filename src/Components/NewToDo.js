import React, { useContext } from 'react'
import '../Assets/NewToDo.css'
import  {List}  from '../Content/Content';


function NewToDo() {

  const {showField, setShowField} = useContext(List);

  const ShowInput = (e) => {
    e.preventDefault();
    setShowField(true);

    
  }

  return (
    <div>
        <button onClick={ShowInput}>+</button>
        

        {showField &&
        <InputField/>
        }
    </div>
  )
}


function InputField(){
  const  {setTask , input , setInput} = useContext(List);

  const AddTask = (e) =>{
    e.preventDefault();
    setTask( (task) => [
        ...task, {name:input , completed: false}
    ]);
    console.log('g');
    setInput('');
  }

  return(
    <div className='Inputfield'>
      <h3>Add new Task</h3>
      <input type='text' onChange={(e) => setInput(e.target.value)}/>
      <button onClick={AddTask}>Add</button>
    </div>
  )
}

export default NewToDo