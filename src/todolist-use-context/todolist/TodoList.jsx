import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { AppContext } from './TodoApp'


const TodoList = () => {
   const {tasks}=useContext(AppContext)
console.log("todolist->",tasks);
  return (
    <ul className="list-group">
        {
            tasks.map((t)=>{
              return(  <TodoItem key={t.id} task={t}></TodoItem>)
            })
        }
           
       
    </ul>
  )
}

export default TodoList