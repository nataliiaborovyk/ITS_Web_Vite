import React, { useState } from 'react'

const Pizza = () => {

const [pizza, setPizza] = useState('')

  return (
    <div>
        <select 
            value={pizza}
            style={{margin: '10px'}}
            onChange={ (e) => setPizza(e.target.value)}>
            <option>Scegli una pizza...</option>
            <option>Margherita</option>
            <option>Diavola</option>
            <option>Capricciosa</option>
        </select>

        Hai scelto: {pizza}
    </div>
  )
}

export default Pizza