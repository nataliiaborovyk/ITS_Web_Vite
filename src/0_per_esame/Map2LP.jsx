import React, { useState } from 'react'
import Map2LF from "./Map2LF"

const Map2LP = () => {
    const corsi = [
    { id: 1, titolo: "python", docente: "Rossi" , difficolta:"media" },
    { id: 2, titolo: "web", docente: "Pasini" , difficolta:"alta" },
    { id: 3, titolo: "bd", docente: "Bianchi" , difficolta:"media" }
    ];
    const [corsiSelez, setCorsiSelez] = useState(corsi)

    
    const [corsoSelezionato, setCorsoSelezionato] = useState(null)

    const select = (corso)=>{
        setCorsoSelezionato(corso)
    }

    const elim = (corso)=>{
        setCorsiSelez(prev=>prev.filter(c=>c.id!==corso.id))
        if(corsoSelezionato && corsoSelezionato.id === corso.id){
            setCorsoSelezionato(null)
        }
    }

    const style={
        lista: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "30px"
        }
    }

  return (
    <div >
        <ul style={style.lista}>
            {corsiSelez.map((oggetto)=>{
                const {id, titolo, docente, difficolta} = oggetto
                return (
                <Map2LF
                    key={id}
                    // titolo={titolo}
                    // docente={docente}
                    // difficolta={difficolta}
                    {...oggetto}
                    select={()=>select(oggetto)}
                    elim={()=>elim(oggetto)}
                    />)
            })}
        </ul>
        <p>{corsoSelezionato &&
             `hai scelto: ${corsoSelezionato.titolo} - ${corsoSelezionato.docente}
                            ${corsoSelezionato.difficolta}`}
        </p>

    </div>
  )
}

export default Map2LP