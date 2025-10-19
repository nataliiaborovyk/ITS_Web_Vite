import React, { useState } from 'react'

const CheckBox_Array = () => {

const lista = [
    {id:1, nome:'Anna', eta:27},
    {id:2, nome:'Alex', eta:40},
    {id:3, nome:'Alice', eta:18},
    {id:4, nome:'Marco', eta:24},
    {id:5, nome:'Mirco', eta:32},
    {id:6, nome: 'Matteo', eta:42}
]

// per impostare setState a false per ogni elemento del array

const statoIniziale = (arr) => {
                            const iniziale = {}
                            arr.forEach(
                                        (p) => {iniziale[p.id] = false}
                                        )
                            return iniziale
}

const selezionaTutti = (arr) => {
                            const nuovo_array = {}
                            arr.forEach(
                                        (p) => {nuovo_array[p.id] = true}
                                        )
                            return nuovo_array
}

const [state, setState] = useState(() =>statoIniziale(lista))

const accetto = (p) => {setState(
                                (prev) => {
                                    const nuovo = {...prev}
                                    nuovo[p.id] = ! prev[p.id]
                                    return nuovo
                                })}

  return (
    <div>
        <h3>Nomi selezionati</h3>
        {lista.map(
            (p) => (
                <div key={p.id} className='form-check d-block'>
                    <label>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            checked={state[p.id]}
                            onChange={()=>accetto(p)} // non posso scrivere onChange={accetto(p)} - significa che la funzione si esegue subbito e non on click
                            />
                        nome - {p.nome}, eta - {p.eta}
                    </label>
                    <p className="text-muted ms-4">
                        Stato: {state[p.id] ? <span style={{color:'green'}}>Sì</span> : <span style={{color:'red'}}>No</span>}
                    </p>

                </div>
            )
        )}
        <button
            onClick={() => setState(selezionaTutti(lista))}>
            Seleziona tutto!
        </button>
        <button
            onClick={()=> {setState(statoIniziale(lista))}}>
            Azzera tutto!
        </button>
    </div>
  )
}

export default CheckBox_Array