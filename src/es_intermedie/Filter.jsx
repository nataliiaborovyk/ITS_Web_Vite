import React from 'react'

const Filter = () => {

const colori = [
    {id:1, colore: 'red'},
    {id:2, colore: 'green'},
    {id:3, colore: 'blue'},
    {id:4, colore: 'yellow'},
    {id:5, colore: 'purple'}
]

// filter crea nuovo array
const colori_nuovo = colori.filter(
    (p) => (p.id !== 3)
// Alternativa: togli il 3° elemento indipendentemente dall’id
// const colori_nuovo = colori.filter((_, i) => i !== 2)

)
  return (
    <div className='container'>
        <h3>Colori con filter</h3>
        {colori_nuovo.map(
            (p) => (
            <div className='row' key={p.id}>
                <div className='col-6 border' >Id: {p.id}</div>
                <div className='col-6 border' style={{color:p.colore}}> Colore: {p.colore}</div>
            </div>)
        )}

    </div>
  )
}

export default Filter