import React, { useState } from 'react'

const Testo = () => {

    const [mostra, setMostra] = useState(false)


  return (
    <div>
        <button onClick= { () => setMostra(!mostra)}>
            {mostra ? "Nascondi" : "Mostra" }
        </button>

        {mostra && <div>
                    <p>Obiettivo: Un bottone che mostra/nasconde un paragrafo di testo</p>
                    <p>Requisiti:</p>
                    <ul>
                        <li>Un bottone con scritto "Mostra" o "Nascondi"</li>
                        <li>useState con valore booleano (true/false)</li>
                        <li>Quando clicchi, il testo appare o scompare</li>
                    </ul>
                   </div> }
    </div>
  )
}

export default Testo