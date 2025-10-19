import TodoList from "./TodoList";
import TodoApp from "./TodoApp";

import React, { useRef } from "react";     

// useRef() serve per tenere un riferimento stabile a qualcosa 
          // (un valore o un elemento DOM) senza far ridisegnare il componente ogni volta.

const TodoForm = ({onAddTask}) => {

   // 1) Creo un "riferimento" all'input di testo
   // non causa re-render
  const textRef = useRef(null);   // creo un "contenitore vuoto",una “scatola” vuota dove React metterà l’elemento HTML

   // 2) Gestisco l'invio del form
  const handleSubmit=(e)=>{
        e.preventDefault();        //preventDefault() è un metodo dell’oggetto evento, blocca il refresh della pagina

      // prendo il valore scritto nell'input
        const value = textRef.current.value.trim();

      // 3) Validazione semplice: niente stringhe vuote/spazi
        if(value){     // .trim() Serve per togliere tutti gli spazi all’inizio e alla fine del testo
          onAddTask(value)  // chiama il padre con il testo
          textRef.current.value=""      // pulisci l'input
        }else{
          alert("inserisci un task valido")
        }
      }

  // 4) Il form: invio con Enter o clic sul bottone
  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>   

      <input 
        type="text" 
        className="form-control me-2" 
        ref={textRef}    // Collega questo elemento <input> all’oggetto textRef che ho creato con useRef()
                        // Così, React mette dentro textRef.current il riferimento diretto all’input del DOM
      ></input>

      <button className="btn btn-primary">Inserisci</button>
    </form>
  );
};

export default TodoForm;

// form cattura che click che enter dalla tastiera

// All’inizio:   textRef = { current: null }
// Dopo che React ha caricato il componente con <input ref={textRef}/>: textRef = { current: <input type="text" /> }
// Quindi textRef.current è proprio l’elemento HTML reale.

// Quando l’utente scrive qualcosa nell’input,
//  il valore digitato non viene salvato automaticamente in textRef (come succede con useState),
//   ma il riferimento all’elemento (textRef.current) ti permette di leggere il valore in quel momento.


// Utente preme Enter
//    ↓
// Evento "submit"
//    ↓
// handleSubmit(e)
//    ↓
// e.preventDefault()  ← blocca ricarica
//    ↓
// leggi input (via useRef o via useState)
//    ↓
// addTask()
