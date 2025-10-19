import React, { useState } from 'react'


const Termostato  = () =>  {
    const [temperatura, setTemperatura] = useState(20)
    const aumenta = (() => {
        setTimeout(()=>{
        setTemperatura(current => current+1)
        }, 2000 )
    })
    return (
        <div>
            <h5>Temperatura: {temperatura}</h5>

            <button className="btn btn-danger"  onClick = { () => setTemperatura(temperatura - 1)}>-</button>

            <button onClick = {aumenta} className="btn btn-success">+</button>
        </div>
    );
}

export default Termostato;