import React, { useState } from "react";

const Contatore = () => {

    const [numero, setNumero] = useState(0)
    const [positivo, setPositivo] =useState(true)

    const aumenta =()=>{
        setNumero(prev=>prev +1)
        cambia()
    }

    const diminuisci =()=>{
        setNumero(prev=>prev -1)
        cambia()
    }

    const cambia =()=>{
        setPositivo(!positivo)

    }

    return(
        <div>
            <h1>{numero}</h1>
            
            <button onClick={aumenta} >Aumenta</button>
            <button onClick={diminuisci} >Diminuisci</button>

            <h2>{positivo && <p>Vedo messaggio</p>}</h2>
        </div>
    )
}

export default Contatore