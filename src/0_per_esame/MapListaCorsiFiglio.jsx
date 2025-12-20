import React from 'react'

const MapListaCorsiFiglio = (props) => {
  return (
    <li>
        {props.titolo} - {props.docente} - {props.difficolta}
        <button onClick={props.selezion}>Seleziona</button>
        <button onClick={props.elimin}>Elimina</button>
    </li>
    
  )
}

export default MapListaCorsiFiglio