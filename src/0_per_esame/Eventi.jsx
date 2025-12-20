import React, { useState } from "react";

const Eventi = () => {

    // const [testo, setTesto] = useState("")
    // const [stato, setStato] =useState(false)

    // const saluta =(testo)=>{
    //     alert("Ciao " + testo)
    // }

    // const cambia = (e) =>{
    //     setTesto(e.target.value)
    // }

    // const clicca =()=>{
    //     setStato(prev=>!prev)
    // }



    const [input1, setInput1] = useState("")
    const vedi1 = (e) => {
        setInput1(e.target.value)
    }

    const [input2, setInput2] = useState("")
    const [testo, setTesto] = useState("")
    const vedi2 = () => {
        setInput2(e.target.value)
    }
    const mostra=()=>{
        setTesto(input2)
    }

    return(
        <div>
            {/* <input onChange={cambia}></input>
            <button onClick={()=>saluta(testo)}>Saluta</button>

            <button onChange={clicca}>Clicca</button>
            <div>{stato && "hai cliccato"}</div>

            <input onChange={cambia} placeholder="Scrivi qui.."></input>
            <p>{testo}</p> */}

            <div>
                <input onChange={vedi1} placeholder="Nome"></input>
                <p>{input1}</p>
            </div>

            <div>
                <input onChange={(e)=>setInput2(e.target.value)} placeholder="Nome"></input>
                <button onClick={mostra}>Mostra</button>
                <p>{testo}</p>
            </div>
            

        </div>
    )
}

export default Eventi