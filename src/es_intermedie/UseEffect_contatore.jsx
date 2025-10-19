import React, { useEffect, useRef, useState }  from 'react'

const UseEffect_contatore = () => {


const lista = [
    {id:1, nome:'Anna', eta:27},
    {id:2, nome:'Alex', eta:40},
    {id:3, nome:'Alice', eta:18},
    {id:4, nome:'Marco', eta:24},
    {id:5, nome:'Mirco', eta:32},
    {id:6, nome: 'Matteo', eta:42}
]

const limite = 4
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

const prevContRef = useRef(0)

const [conteggio, setConteggio] = useState(0)

const accetto = (p) => {setState(
                                (prev) => {
                                    const nuovo = {...prev}
                                    nuovo[p.id] = ! prev[p.id]
                                    return nuovo
                                })}



const contatore = () => {
    const valori = Object.values(state)
    let cont = 0
    for (let i=0; i<valori.length; i++) {   // for i in range(len(valori)):    .length == len()
        if (valori[i] === true){cont = cont + 1}
    }
    return cont
}

const contatore2 = () => {
    let cont2 = 0
    for (let k in state) { if (state[k] === true) {cont2 = cont2 + 1} }
    return cont2
}

const contatore3 = () => {
    const cont3 = Object.values(state).filter((v)=> (v===true)).length 
    return cont3
}


const lista_nuova = lista.filter((p) => state[p.id])

useEffect( () => {
    const num = contatore3()   // && == and,   prevContRef.current il valore del oggetto prevContRef
    if (prevContRef.current <= limite && num > limite) {alert('Puoi selezionare solo ' + limite)}
    prevContRef.current = num
    setConteggio(num)
}, [state])

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
        <div style={{color:conteggio>limite ? 'red' : 'black'}}>
            <p>Elementi selezionati {conteggio}</p>
            <p>{conteggio > 4 && <strong>Hai superato il limite di {limite}</strong>}</p>
        </div>
        <button
            style={{ color: conteggio>limite ? 'red': 'black', margin:'20px'}}
            onClick={() => setState(selezionaTutti(lista))}>
            Seleziona tutto!
        </button>
        <button
            style={{ color: conteggio>limite ? 'red': 'black', margin:'20px'}}
            onClick={()=> {setState(statoIniziale(lista))}}>
            Azzera tutto!
        </button>
        
        <h3 style={{ color: conteggio>limite ? 'red': 'black', margin:'20px'}}>Utenti selezionati</h3>
        <div  className='container'>
        <ul>
            {lista_nuova.map(
                (p) => (
                    <li className='row' key={p.id}>
                        <span className='col-2 border'>
                            ID: {p.id}
                        </span>
                        <span className='col-6 border'>
                            Nome: {p.nome}
                        </span>
                        <span className='col-4 border'>
                            Eta: {p.eta}
                        </span>
                    </li>
                )
            )}
        </ul>
        </div>
    </div>
  )
}

export default UseEffect_contatore