import React, { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

const GalleriaFoto  = () =>  {

    const [foto, setFoto] = useState([])

    const [staCaricando, setStaCaricando] = useState(true)

    const [errore, setErrore] = useState(null)


    useEffect(() => {
        const carica = async () => {
        try {
            // serve per resettare i valori
            setStaCaricando(true);
            setErrore(null);

            const risposta = await fetch(url);
            const data = await risposta.json();
            setFoto(data);
            setStaCaricando(false);

        } catch (err) {
            setErrore(err.message || 'Errore sconosciuto');
            setStaCaricando(false);
        } 
        };
        carica();
    }, []);

    if (staCaricando) 
        return <p>Caricamento in corso...</p>;
    if (errore) 
        return <p>Errore: {errore}</p>

    return (
        <div>
        <h5>Galleria foto</h5> 
        {foto.map((f) => (
            <div key={f.id}>
                <img src={f.thumbnailUrl} />
                <p>{f.title}</p>
            </div>
        ))}
        </div>
    )
}

export default GalleriaFoto