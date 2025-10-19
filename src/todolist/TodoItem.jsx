import TodoList from "./TodoList";
import TodoApp from "./TodoApp";
import TodoForm from "./TodoForm";
import React, { useState } from "react";


// Mostra una singola task e gestisce i pulsanti (completa, elimina, ecc.)
// Definizione del componente funzionale TodoItem
// Riceve 4 props dal padre:
// - task: l'oggetto della singola task { id, text, completed }
// - handleDeleteTask: funzione per eliminare una task (definita in alto, es. in TodoApp)
// - onToggleTask: funzione per spuntare/dispuntare la task (toggle completed)
// - updateTask: funzione per salvare il nuovo testo quando si modifica

const TodoItem = ({ task, handleDeleteTask, onToggleTask, updateTask }) => {

  // Stato locale: se TRUE siamo in modalità "modifica", se FALSE mostriamo solo il testo
  const [isEditing, setIsEditing] = useState(false);  // modalità edit on/off

    // Stato locale: tiene il testo che l'utente sta editando nell'input
  const [editText, setEditText] = useState(task.text);  // testo da modificare


  // Funzione che salva il testo modificato
  const handleSave=()=>{
    // Validazione: non accettare stringhe vuote/solo spazi
    if(editText.trim()){
      // Chiamo la funzione passata dal padre per aggiornare il testo della task
      updateTask(task.id, editText)   // PATCH { text }
      // Esco dalla modalità modifica
      setIsEditing(false)
    }else{
      alert("Non puoi mettere un task vuoto")
    }
  }
    // Il JSX che definisce come appare il singolo elemento della lista
  return (
    <li className="list-group-item d-flex justify-content-between">
      {/* Se isEditing è TRUE: mostra il blocco per MODIFICARE
          Altrimenti (FALSE): mostra il blocco di sola VISUALIZZAZIONE */}
      {isEditing ? (
        // ----- BLOCCO MODIFICA -----------------------------------------
        <div>
          <input
            type="text"
            className="form-control d-inline-block"
            value={editText}    // Campo di input controllato (collegato a editText) 
            onChange={(e) => setEditText(e.target.value)}   // ad ogni tasto, aggiorna lo stato editText
            style={{ width: "300px", marginRight: "3px" }}
            autoFocus   // quando appare l'input, il cursore va subito qui 
            onBlur={handleSave}    // quando l'input perde il focus (clic fuori), salva
          ></input>

          <button    // Bottone di annullamento: esce dalla modalità modifica senza salvare
            onClick={() => setIsEditing(false)}   //  // annulla (non salva)
            className="btn btn-danger"
            style={{ marginTop: "-6px" }}
          >
            X
          </button>
        </div>
      ) : (
        // ----- BLOCCO VISUALIZZAZIONE ------------------------------------------
        <div>
          <input   // Checkbox per segnare completata/non completata la task 
            type="checkbox"    // Significa che l’input è una casella da spuntare, cioè una “check-box”.
            checked={task.completed}     // se task.completed è true, la casella appare spuntata
            onChange={() => onToggleTask(task.id, task.completed)}   // quando l'utente clicca, chiamiamo il toggle passando id e stato attuale
            className="form-check-input me-2"   // stile 
          ></input>

          <span    // Testo della task in modalità visualizzazione
            onDoubleClick={() => setIsEditing(true)}  // doppio click per entrare in modalità modifica (mostreremo l'input)
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            // Se task.completed è true, aggiunge una linea sopra il testo (barrato)
            // Se task.completed è false, non mette nessuna decorazione
          >
            {task.text}       {/* Qui mostriamo il testo attuale della task */}
          </span>

        </div>
      )}

      <button   // Bottone per eliminare la task (chiama la funzione del padre con l'id
        className="btn btn-sm btn-danger"
        onClick={() => {
          handleDeleteTask(task.id);
        }}
      >
        Elimna
      </button>
    </li>
  );
};

export default TodoItem;


      // Render lista
// TodoList riceve tasks
//   ↓
// .map → crea un TodoItem per ogni task (key = id)
//   ↓
// Ogni TodoItem mostra: checkbox + testo (dblclick per edit) + bottone Elimina

      // Toggle completata
// Checkbox → onToggleTask(id, completed)
//   ↓
// toggleTaskService(id, completed) → PATCH { completed: !completed }
//   ↓
// fetchTask() → setTasks(data) → re-render
  
      // Edit testo
// Doppio clic sul testo → isEditing = true → appare input
//   ↓
// L'utente modifica → onBlur → handleSave()
//   ↓
// Se valido → updateTask(id, text) → PATCH { text } → fetchTask() → re-render
// Se vuoto → alert → resta in edit finché non clicchi X o cambi testo

      // Elimina
// Bottone "Elimina" → onDeleteTask(id)
//   ↓
// deleteTaskService(id) → DELETE /tasks/{id}
//   ↓
// fetchTask() → setTasks(data) → re-render


// ╔═══════════════════════════════════╗
// ║      Componente TodoItem          ║
// ╚═══════════════════════════════════╝
//          ↓
//  [ Stato 1: isEditing = false ]
//       ✔ Mostra testo + checkbox + bottone Elimina
//       ✔ Doppio click → cambia stato → isEditing = true
//          ↓
//  [ Stato 2: isEditing = true ]    
//        Mostra input di testo + bottone X (annulla)
//        Al click fuori (onBlur) o Salva → aggiorna testo
//          ↓
//  [ Torna a Stato 1 ]


// Come funziona 

// 1. Due modi di vedere la riga

    // isEditing = false → vedi checkbox + testo.
    // isEditing = true → vedi input di testo + bottone “X” (per annullare).

// 2. Completare/Non completare

    // Clic sulla checkbox → chiama onToggleTask(task.id, task.completed).
    // Il padre aggiorna completed e React ridisegna la riga (testo barrato/non barrato).

// 3. Entrare in modifica

    // Doppio click sul testo → setIsEditing(true) → appare l’input con dentro editText.

// 4. Modificare il testo

    // Scrivi nell’input → onChange aggiorna editText (stato locale, input controllato).
    // Blur (esci dall’input) → handleSave():
    // se il testo non è vuoto → updateTask(id, editText) e setIsEditing(false);
    // se vuoto → alert(...) e resta in modifica.

// 5. Annullare la modifica

    // Clic su X → setIsEditing(false) → torni alla vista normale senza salvare.

// 6. Eliminare

    // Clic su Elimna → handleDeleteTask(task.id) → il padre rimuove la task dall’elenco.



// Nota pratica importante (comportamento di onBlur)

// Se clicchi “X” mentre l’input ha il focus, prima scatta onBlur (che chiama handleSave) e poi il click sulla “X”.
// Questo può salvare invece di annullare.
// Soluzioni comuni:

  // togli onBlur={handleSave} e salva con Invio o con un bottone Salva;

  // oppure nella “X” usare onMouseDown al posto di onClick per evitare il blur prima.



// textDecoration — sì, è un attributo CSS esistente, È una proprietà CSS già esistente, come color, fontSize, backgroundColor, ecc.

// Serve per decorare il testo, per esempio:

// "none" → nessuna decorazione (testo normale)

// "underline" → sottolineato

// "overline" → una linea sopra

// "line-through" → una linea che taglia il testo (come per i compiti completati)





// ┌──────────────────────────┐
// │   STATO A: VISUALIZZA    │
// │  - Checkbox (✓/□)        │
// │  - Testo (span)          │
// │  - Bottone "Elimina"     │
// └─────────────┬────────────┘
//               │
//               │ doppio click sul testo (onDoubleClick)
//               ▼
// ┌──────────────────────────┐
// │   STATO B: MODIFICA      │
// │  - Input con testo       │
// │  - (autoFocus)           │
// │  - onChange aggiorna     │
// │  - onBlur → salva        │
// │  - Bottone "X" annulla   │
// └───────┬───────────┬──────┘
//         │           │
//         │           │ click su "X"
//         │           ▼
//         │      (annulla: setIsEditing(false))
//         │
//         │ onBlur / SALVA (handleSave)
//         ▼
// ┌──────────────────────────┐
// │   SALVATAGGIO TESTO      │
// │  - Validazione trim()    │
// │  - Se ok: updateTask()   │
// │  - setIsEditing(false)   │
// └─────────────┬────────────┘
//               │
//               ▼
// ┌──────────────────────────┐
// │  RITORNO A: VISUALIZZA   │
// │  - Mostra testo aggiorn. │
// └─────────────┬────────────┘
//               │
//               │ click su "Elimina"
//               ▼
// ┌──────────────────────────┐
// │      ELIMINAZIONE        │
// │  - handleDeleteTask(id)  │
// │  - Padre aggiorna lista  │
// └──────────────────────────┘


// Eventi e cosa fanno (riassunto)

// Checkbox onChange → onToggleTask(id, completed) → barrato / non barrato.

// Doppio click sul testo → setIsEditing(true) → entra in MODIFICA.

// Input onChange → aggiorna editText mentre scrivi.

// Input onBlur → handleSave()

// se editText.trim() è vuoto → alert(...) (resta in modifica)

// se valido → updateTask(id, editText) → setIsEditing(false) → torna a VISUALIZZA.

// Bottone X (annulla) → setIsEditing(false) (niente salvataggio).

// Bottone Elimina → handleDeleteTask(id) (padre rimuove la task).