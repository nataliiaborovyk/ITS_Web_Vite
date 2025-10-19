import React, { useContext, useRef } from "react";
import { AppContext } from "./TodoApp";


const TodoForm = ({addTask}) => {
//  console.log("Context",useContext(AppContext))
 // const context=useContext(AppContext)
  const textRef = useRef(null);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(textRef.current.value.trim()){
      addTask(textRef.current.value)
      textRef.current.value=""
    }else{
      alert("inserisci un task valido")
    }

  }
  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input type="text" className="form-control me-2" ref={textRef}></input>
      <button className="btn btn-primary">Inserisci</button>
    </form>
  );
};

export default TodoForm;
