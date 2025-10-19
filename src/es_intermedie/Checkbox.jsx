import React, { useState } from 'react'

const Checkbox = () => {

const lingue = ['JS', 'Python', 'Java']

const [stato, setStato] = useState({
    JS: false, 
    Python: false,
    Java: false
})

// const  nomeFunzione   =   (parametri)  =>  { corpo della funzione }
// qui i rapresenta un elemento nel array Lingue che map passa a accetto(i)

const accetto = (i) => {setStato(     //  prev è un altro parametro dentrosetStato
                                        (prev) => {
                                                    const nuovo = {...prev}
                                                    nuovo[i]= !prev[i]
                                                    return nuovo
                                                    }
                                    )}

const accetto2 = (i) => {setStato(
                                        (prev) => (
                                                {...prev, [i]: ! prev[i]}
                                        )       
                                    )}

  return (
    <div>
        <h3>Lingue </h3>
        {lingue.map(
            (p) => (
                 // d-block significa “display: block” occupa tutta la riga → e quindi va a capo automaticamente
                 // form-check classe di bootstrap che da uno stile uniforme, imposta dimensione, gestisce margine, allinea verticalmente
                 // label serve - collega testo e input, si puo cliccare su testo per selezionare checkbox
   
                <div key={p} className='form-check d-block'>
                  <label>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            checked={stato[p]}
                            onChange={() => accetto(p)}/>
                            Ho imparato - {p}
                    </label>
                    <p className="text-muted ms-4">
                        Stato: {stato[p] ? <span style={{color:'green'}}>Sì</span> : <span style={{color:'red'}}>No</span>}
                    </p>
                </div>
            )
        )}

    </div>
  )
}

export default Checkbox