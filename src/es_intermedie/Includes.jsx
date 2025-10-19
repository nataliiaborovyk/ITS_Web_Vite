import React, { useState } from 'react'

const Includes = () => {

const [valore, setValore] = useState('')

const colori = [
    {id:1, colore: 'red'},
    {id:2, colore: 'green'},
    {id:3, colore: 'blue'},
    {id:4, colore: 'yellow'},
    {id:5, colore: 'purple'}
]

const array_colori = colori.map(c => c.colore.toLowerCase())

const input_pulito = valore.trim().toLowerCase()

const trovato = array_colori.includes(input_pulito)

const filtrato = colori.filter(c => c.colore.toLowerCase().includes(input_pulito))
const rimasti = colori.filter( c => ! c.colore.toLowerCase().includes(input_pulito))

  return (
    <div>
        <input 
            type='text'
            value={valore}
            placeholder='Scrivi il colore..'
            onChange={(e) => setValore(e.target.value)}
            style={{margin: '10px'}}>
        </input>
        <p>Cerchi: {valore}</p>
        <p>
            {valore ? (trovato ? 'È presente' : 'Non è presente') : 'Digita un colore'}
        </p>
        <h3>Colore trovato</h3>
        <ul>
            {filtrato.map(
                (p) => (
                    <li key={p.id} style={{color: p.colore}}>
                        {p.colore}
                    </li>
                )
            )}
        </ul>
         <h3>Colori rimasti</h3>
        <ul>
            {rimasti.map(
                (p) => (
                    <li key={p.id} style={{color: p.colore}}>
                        {p.colore}
                    </li>
                )
            )}
        </ul>
    </div>
  )
}

export default Includes