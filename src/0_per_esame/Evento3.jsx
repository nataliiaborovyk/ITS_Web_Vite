import React, { useState } from 'react'

const Evento3 = () => {
    const [nome, setNome] = useState("")
    const [eta, setEta] = useState("")
    const [etaMostrata, setEtaMostrata] = useState("")

    const prendiNome=(e)=>{
        setNome(e.target.value)
    }
    const prendiEta=(e)=>{
        setEta(e.target.value)
    }
    const mostraEta=()=>{
        setEtaMostrata(eta)
    }
    const reset=()=>{
        setNome("")
        setEta("")
        setEtaMostrata("")

    }

    let messagioEta = ""

    if(etaMostrata !== ""){
        const numeroEta = Number(etaMostrata)
        if(numeroEta<18){
            messagioEta="Sei minorenne"
        }else {
            messagioEta="Sei maggiorenne"
        }
    }
  return (
    <div>
        <h2>Profilo utente</h2>
        <input onChange={prendiNome} value={nome} placeholder='Inserisci nome ...'></input>
        <input onChange={prendiEta } value={eta} placeholder='Inserisci eta ...'></input>
        
        <div>
            <button onClick={mostraEta}>Conferma</button>
            <button onClick={reset}>Reset</button>
        </div>

        <h4>{nome && "Ciao, " + nome}</h4>
        <h4>{etaMostrata && "Hai " + etaMostrata + " anni"}</h4>
        <h4> {messagioEta}</h4>
    </div>
  )
}

export default Evento3