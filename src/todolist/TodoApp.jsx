import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { API_URL, fetchTaskService,deleteTaskService,addTaskService,toggleTaskService,updateTaskService } from "./api";


// Tiene lo stato principale (lista delle task) e le funzioni (addTask, deleteTask, updateTask, ecc.)

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //Questa funzione serve a rileggere tutte le task aggiornate dal server
  // Serve a far sì che l’interfaccia mostri sempre l’elenco aggiornato dopo ogni modifica fatta sul server
  const fetchTask = async () => {
    try {
      const data = await fetchTaskService()
      setTasks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Handler azioni utente (CRUD “completo”)
  const deleteTask= async (id)=>{
    await  deleteTaskService(id);
     fetchTask()    // // ricarica la lista aggiornata
  }
  const addTask=async (text)=>{
    await addTaskService(text)
     fetchTask()
  }
  const toggleTask=async (id,completed)=>{
    await toggleTaskService(id,completed)
     fetchTask()
  }
    const updateTask=async (id,text)=>{
    await updateTaskService(id,text)
     fetchTask()
  }

                //   Utente clicca “Elimina”
                //     ↓
                // deleteTask(id)
                //     ↓
                // deleteTaskService(id)     → PATCH/DELETE sul server
                //     ↓
                // fetchTask()               → GET /tasks
                //     ↓
                // fetchTaskService()        → const data = await response.json()
                //     ↓
                // setTasks(data)            → aggiorna la lista visibile


  useEffect(()=>{
        fetchTask()
  },[]);

  if (loading) return <div className="alert alert-info">Sto caricando....</div>
  if (error) return <div className="alert alert-danger">Errore: {error}</div>

  return (
    <div className="container m-4">
      <h1 className="mb-4">Todo Do List DATA ANALYST</h1>
      
      {/* Passo le funzioni ai figli come props */}

      <TodoForm onAddTask={addTask}></TodoForm>

      <TodoList        
        tasks={tasks} 
        onDeleteTask={deleteTask} 
        onToggleTask={toggleTask} 
        updateTask={updateTask}
        ></TodoList>
    </div>
  );
};

export default TodoApp;
