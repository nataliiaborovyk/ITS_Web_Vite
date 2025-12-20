import React, { useState } from 'react'
import MapListaCorsiFiglio from './MapListaCorsiFiglio';

const MapListaCorsiPadre = () => {
    const corsi = [
    { id: 1, titolo: "python", docente: "Rossi" , difficolta:"media" },
    { id: 2, titolo: "web", docente: "Pasini" , difficolta:"alta" },
    { id: 3, titolo: "bd", docente: "Bianchi" , difficolta:"media" }
    ];

    const [listaCorsi, setListaCorsi] = useState(corsi)

    const [corsoSelezionato, setCorsoSelezionato] = useState(null)

    const seleziona = (corsoScelto) =>{
        setCorsoSelezionato(corsoScelto)
    }

    const rimuovi = (corsoDaRimuovere) =>{
        setListaCorsi(
            (prev)=>prev.filter((corso) => corso.id !==  corsoDaRimuovere.id)
         )
    }

  return (
    <div>
        <h2>Lista corsi</h2>
        <ul>
            {listaCorsi.map((oggetto)=>{
                return <MapListaCorsiFiglio
                            key={oggetto.id}
                            titolo={oggetto.titolo}
                            docente={oggetto.docente}
                            difficolta={oggetto.difficolta}
                            selezion={()=>seleziona(oggetto)}
                            elimin={()=> rimuovi(oggetto)}/>
            })}
        </ul>
        <p>{corsoSelezionato
            ? `hai selezionato: ${corsoSelezionato.titolo} - ${corsoSelezionato.docente} - ${corsoSelezionato.difficolta}`
            : "Nessun corso"}
        </p>
            
    </div>
  )
}

export default MapListaCorsiPadre