import React, { useState } from 'react'

const Evento2 = () => {
    const [input, setInput] = useState("")
    const [testo, setTesto] = useState("")

    const cambio = (e) => {
        setInput(e.target.value)
    }

    const mostra =()=>{
        setTesto(input)
    }
    
  return (
    <div>
        <input onChange={cambio} placeholder='Nome..'></input>
        <button onClick={mostra}>Mostra</button>
        <p>Appena scrivi: {input}</p>
        <p>Solo dopo click: {testo}</p>

    </div>
  )
}

export default Evento2