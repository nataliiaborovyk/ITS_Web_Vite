import React, { useEffect, useState } from 'react'

const UseEff_fetch = () => {
    const url = "https://jsonplaceholder.typicode.com/users/"

    const [utenti, setUtenti] = useState([])
    const [utScelto, setUtScelto] = useState("")
    const [utente, setUtente] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function getUtenti(){
            try{
                const res = await fetch(url)
                if(!res.ok){throw new Error("errore")}
                const data = await res.json()
                setUtenti(data)
            }catch(er){setError(er.message)}
        }
        getUtenti()
    },[])

    useEffect(()=>{
        if (!utScelto) {
        setUtente(null)
        return}
        try {
            fetch(url+utScelto)
                .then(res=> res.json())
                .then(data=>setUtente(data))
        }catch(er){setError(er.message)}
    },[utScelto])

    const scelta =(el)=>{
        setUtScelto(el.target.value)
    }
  return (
    <div>
        <h2>Lista utenti</h2>
        <select value={utScelto} onChange={scelta}>
            <option value={""}>Scegli utente..</option>
            {utenti.map((el)=>(
                <option key={el.id} value={el.id}>{el.name} - {el.username}</option>
            ))}
        </select>
        {utente && <p>{utente.name} - {utente.username} - {utente.email}</p>}
    </div>
  )
}

export default UseEff_fetch