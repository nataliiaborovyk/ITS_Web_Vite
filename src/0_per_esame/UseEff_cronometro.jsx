import React, { useEffect, useState, useRef } from 'react'

const UseEff_cronometro = () => {
    const durata_ar = [5,10,15,20,25,30]
    const [durata, setDurata] = useState(0)
    const [rimasto, setRimasto] =useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const timeRef = useRef(null)

    const set_durata=(e)=>{
        const num = Number(e.target.value)
        setDurata(num)
        setRimasto(num)
        setIsRunning(true)
    }

    useEffect(()=>{
        if(!isRunning){return}
        if(rimasto <= 0){return}
        // a ogni render asegna nuovo id di setInterval
        timeRef.current=setInterval(()=>{setRimasto(prev=>prev-1)}, 1000)
        
        return () => {
        clearInterval(timeRef.current)}
    },[durata, rimasto,isRunning ])

    useEffect(()=>{
        if(rimasto ===0 && isRunning){
            setIsRunning(false)
        }
    },[isRunning, rimasto])

  return (
    <div>
        <h2>Sceli il timer</h2>
        <select value={durata} onChange={set_durata}>
            <option value="">Scegli timer..</option>
            {durata_ar.map((el, index)=>(
                <option key={index} value={el}>{el}</option>
            ))}
        </select>
        <div value={rimasto}>Tempo: {rimasto}</div>

    </div>
  )
}

export default UseEff_cronometro