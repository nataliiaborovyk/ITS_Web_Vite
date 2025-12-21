import React, { useState } from 'react'

const Form1 = () => {
    const [input, setInput] = useState("")
    const [inputMostrato, setInputMostrato] = useState("")

    const onInput=(e)=>{
        setInput(e.target.value)
    }

    const mostra =()=>{
        setInputMostrato(input)
    }

    const gestisciSubmit = (e)=>{
        e.preventDefault()
        setInputMostrato(input)
    }
  return (
    <div>
        <form onSubmit={gestisciSubmit}>
        <input onChange={onInput} value={input}></input>
        <p>{input}</p>
        <button type="submit">Mostra</button>
        <p>{inputMostrato && inputMostrato}</p>
        </form>
    </div>
  )
}

export default Form1