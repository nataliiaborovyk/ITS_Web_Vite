import React, { useState } from 'react'

const Select2_map_foreach = () => {
    const cittaLista = [
        { id: 1, nome: "Roma", nazione: "Italia", popolazione: 2873000 },
        { id: 2, nome: "Milano", nazione: "Italia", popolazione: 1366000 },
        { id: 3, nome: "Madrid", nazione: "Spagna", popolazione: 3266000 },
        { id: 4, nome: "Parigi", nazione: "Francia", popolazione: 2161000 },
        { id: 5, nome: "Berlino", nazione: "Germania", popolazione: 3645000 }
        ];
    
    const [citta, setCitta] = useState(cittaLista)
    const [cittaScelta, setCittaScelta] = useState("")

    const nomi_citta = cittaLista.map((c)=>c.nome)

    const scelta = (e)=>{
        setCittaScelta(e.target.value)
    }

    const selezionata = cittaLista.find(c=>c.id===Number(cittaScelta))
  return (
    <div>
        <select value={cittaScelta} onChange={scelta}>
            <option value="">Scegli nome citta ...</option>
            {
                cittaLista.map((el)=>{
                    return (
                        <option  key={el.id} value={el.id}>{el.nome}</option>
                    )
                })
            }

        </select>
        {
            cittaScelta && (
                <p>
                    Citta: {selezionata.nome} <br/>
                    Nazione: {selezionata.nazione} <br/>
                    Popolazione: {selezionata.popolazione}
                </p>
            )
        }
    </div>
  )
}

export default Select2_map_foreach