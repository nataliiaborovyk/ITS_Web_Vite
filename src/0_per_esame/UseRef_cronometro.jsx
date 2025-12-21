import React, { useState, useRef } from 'react'

const UseEff_cronometro = () => {
    const [time, setTime] = useState(0)
    const timeRef = useRef(null)  // posto dove salveremo l’ID del timer

    const start =()=>{
        if(timeRef.current!==null){return}
        timeRef.current=setInterval(()=>{setTime(prev=>prev+1)}, 1000)
    }
    const stop=()=>{
        if(timeRef.current===null){return}
        clearInterval(timeRef.current)
        timeRef.current = null
    }
    const reset=()=>{
        if(timeRef.current!==null){
        clearInterval(timeRef.current)
        timeRef.current = null}
        setTime(0)
    }

  return (
    <div>
        <div value={time}>{time}</div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseEff_cronometro