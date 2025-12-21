import React, { useEffect, useState } from 'react'

const UseEff1_dipendenze = () => {
    const [val, setVal] = useState(0)

    const aumenta = ()=>{
        setVal(prev=>prev+1)
    }
    const diminuisci = ()=>{
        setVal(prev=>prev-1)
    }
    const reset =()=>{
        setVal(0)
    }
    useEffect(()=>{
        console.log(val)
    }, [val])
  return (
    <div>
        <div valore={val}>{val}</div>
        <button onClick={aumenta}>Aumenta</button>
        <button onClick={diminuisci}>Diminuisci</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseEff1_dipendenze