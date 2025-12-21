import React, { useEffect, useState } from 'react'

const Async1 = () => {
    const url = "https://jsonplaceholder.typicode.com/users"

    const [utenti, setUtenti] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function get_data(){
        try{
            const res = await fetch(url)
            if (!res.ok){throw new Error ("errore")}
            const data = await res.json()
            setUtenti(data)
        } catch (er) {setError(er.message)
        } finally {setLoading(false)}
        }
        get_data()
    }, [])

    if (loading) return <h2>sto caricando</h2>
    if (error) return <h2>errore{error}</h2>

    const style = {
        lista: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            gap: "30px"
        }
    }

  return (
    <div style={style.lista}>
        {utenti.map((el)=>(
            <p key={el.id}>{el.name} - {el.username} - {el.email}</p>
        ))}
    </div>
  )
}

export default Async1