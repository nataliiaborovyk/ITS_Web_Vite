export const API_URL = "http://localhost:4000/tasks";


// GET tutte le task
export const fetchTaskService = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Errore nella fetch");
  const data = await response.json();
  return data;
};

export   const deleteTaskService= async (id)=>{
    await  fetch(API_URL+"/"+id,{method:"DELETE"});
   
  }

export const addTaskService=async (text)=>{
    await fetch(API_URL,{
      method:"POST",
      headers:{"Content-Type":"application/json"},  // Dice al server che il corpo del messaggio (body) sarà in formato JSON.
      body:JSON.stringify({text,completed:false})

          // body: il contenuto della richiesta (i dati che invii).
          // JSON.stringify(...): trasforma l’oggetto JavaScript in una stringa JSON (obbligatorio per fetch).
          // { text, completed: false }: è l’oggetto che rappresenta la nuova task.
          // text → il testo passato alla funzione (es. "Fare la spesa")
          // completed: false → la task è nuova, quindi non è ancora completata.
    })
    
  }

 export const toggleTaskService=async (id,completed)=>{
      await fetch(API_URL+"/"+id,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({completed:!completed})
      })
    }
    
 export     const updateTaskService=async (id,text)=>{
      await fetch(API_URL+"/"+id,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({text})
      })
    
    }