import React, { useState } from 'react'

const ModuloContatti = () => {

    const [datiForm, setDatiForm] = useState(
        {
            nome: '',
            email: '',
            messaggio: ''
        }
    );

  const handleChange = (evento) => {
    const campo = evento.target.name;   
    const valore = evento.target.value; 

    const nuovoStato = { ...datiForm };
    nuovoStato[campo] = valore;  

    setDatiForm(nuovoStato);    
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();    
    console.log('Dati inviati:', datiForm);
    setDatiForm({ nome: '', email: '', messaggio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>

    <h2>Modulo contatti</h2>

    <input
        type="text"
        name="nome"
        placeholder="Il tuo nome"
        value={datiForm.nome}
        onChange={handleChange}
    />

    <input
        type="email"
        name="email"
        placeholder="La tua email"
        value={datiForm.email}
        onChange={handleChange}
    />

    <textarea
        name="messaggio"
        placeholder="Il tuo messaggio"
        value={datiForm.messaggio}
        onChange={handleChange}
    />
    
    <button type="submit">Invia</button>
    </form>
  );
};


export default ModuloContatti