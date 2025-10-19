import React, { useState } from 'react'

const Mondo = () => {

const [colore, setColore] = useState('black')

const testo = <h1 style={{color: colore}}>Ciao Mondo</h1>

  return (
    <div>
        {testo}

        <button 
            style={{width: '100px', backgroundColor: 'red', color: 'white', margin: '5px'}} 
            onClick={ () => {setColore('red')}}>
            Rosso
        </button>

        <button 
            style={{width: '100px', backgroundColor: 'green', color: 'white', margin: '5px'}}
            onClick={ () => {setColore('green')}}>
            Verde
        </button>

        <button
            style={{width: '100px', backgroundColor: 'blue', color: 'white', margin: '5px'}}
            onClick= { () => {setColore('blue')}}>
            Blu
        </button>
    </div>
  )
}

export default Mondo