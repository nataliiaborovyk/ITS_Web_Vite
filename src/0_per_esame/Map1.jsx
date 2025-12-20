import React from 'react'

const Map1 = () => {
    const nomi = ["Anna", "Luca", "Sara"];
    

  return (
    <div>
        <h2>Lista nomi</h2>
        <ul>
            {nomi.map((nome, index)=>{
                return <li key={index}>{nome}</li>
            })}
        </ul>
    </div>
  )
}

export default Map1