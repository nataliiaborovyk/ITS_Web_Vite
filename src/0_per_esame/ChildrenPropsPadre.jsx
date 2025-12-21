import React from 'react'
import ChildrenPropsFiglio from './ChildrenPropsFiglio'

const ChildrenPropsPadre = () => {
    const alert1 =()=>{
        alert("Ho capito")
    }
  return (
    <div>
        sono padre
        <ChildrenPropsFiglio>
            Ciao io sono contenuto dentro il figlio
            <h2>Comincio a capire</h2>
        </ChildrenPropsFiglio>
        <ChildrenPropsFiglio>
            Ciao io sono contenuto dentro il figlio
            <button onClick={alert1}>Vedi</button>
        </ChildrenPropsFiglio>
    </div>
  )
}

export default ChildrenPropsPadre