import React from 'react';
import TodoItem from './TodoItem';


// Riceve la lista e le funzioni dall’App, e le passa a ogni singolo elemento (TodoItem)

const TodoList = ({tasks,onDeleteTask,onToggleTask,updateTask}) => {
console.log("todolist->",tasks);
  return (
    <ul className="list-group">
        {tasks.map((t) => {   //.map() serve per creare automaticamente un componente TodoItem per ogni task nella lista.
          return(  
          <TodoItem 
            key={t.id} 
            task={t} 
            handleDeleteTask={onDeleteTask} 
            onToggleTask={onToggleTask} 
            updateTask={updateTask}
          ></TodoItem>)
          })
          }
    </ul>
  )
}

export default TodoList


// deleteTask() → definita in TodoApp
//      ↓ passata come prop
// TodoList riceve onDeleteTask
//      ↓ passata di nuovo come prop
// TodoItem riceve onDeleteTask
//      ↓
// Utente clicca ❌
//      ↓
// onDeleteTask(id) → React chiama la funzione di TodoApp
//      ↓
// TodoApp aggiorna lo stato → setTasks()
//      ↓
// Lista aggiornata → React ridisegna TodoList
