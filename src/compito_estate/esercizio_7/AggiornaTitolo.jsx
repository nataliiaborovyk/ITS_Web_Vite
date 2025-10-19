import React, { useEffect, useState } from 'react'

const AggiornaTitolo  = () =>  {

    const [nome, setNome] = useState('')

    useEffect( () => {
        if (nome === '') {
            document.title = "Benvenuto";
        } else {
            document.title = `Ciao, ${nome}`;
        }
    }, [nome]);

    return (
        <div>
            <h5>Aggiorna il titolo della scheda</h5>
            <input
            type = "text"
            placeholder = "Scrivi il tuo nome..."
            value = {nome}
            onChange = { (e) => setNome(e.target.value)}
            />
            <p>Stai scrivendo: {nome}</p>
        </div>
    );
}

export default AggiornaTitolo