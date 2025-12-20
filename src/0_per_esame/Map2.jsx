import React from 'react'
import Map2figlio from './Map2figlio';

const Map2 = () => {
    const utenti = [
    { id: 1, nome: "Anna", eta: 22 },
    { id: 2, nome: "Luca", eta: 30 },
    { id: 3, nome: "Sara", eta: 17 }
    ];

  return (
    <div>
        <h2>Lista utenti</h2>
        <ul>
            {utenti.map((utente) =>{
                return <Map2figlio 
                            key={utente.id}
                            nome={utente.nome}
                            eta={utente.eta}/>            
            }
            )}
        </ul>

    </div>
  )
}

export default Map2