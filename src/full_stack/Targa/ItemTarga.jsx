// src/components/EsercizioTarga/ItemTarga.jsx
import React, { useState } from "react";

const ItemTarga = ({ onAddItem }) => {
  // const validTarga = /^[A-Z]{2}[0-9]{3}[A-Z]{2}$/;
  const [proprietario, setProprietario] = useState("");
  const [targa, setTarga] = useState("");
  const [modello, setModello] = useState("");
  const [assicurazione, setAssicurazione] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    // evito il ricaricamento della pagina
    e.preventDefault();

    const nuovoItem = {
      proprietario,
      targa,
      modello,
      scadenzaAssicurazione: assicurazione,
    };

    onAddItem(nuovoItem);

    // debug (come nelle tue immagini)
    alert(JSON.stringify(proprietario, null, 2));
    alert(JSON.stringify(targa, null, 2));
    alert(JSON.stringify(modello, null, 2));
    alert(JSON.stringify(assicurazione, null, 2));

    // pulisco i campi
    setProprietario("");
    setTarga("");
    setModello("");
    setAssicurazione("");
  };

  return (
    <div>
      <form
        className="form-group row"
        onSubmit={handleSubmit}
      >
        <div className="col-sm-2">
          <label
            htmlFor="inputProprietario"
            className="form-label"
          >
            Nome:
          </label>
          <input
            id="inputProprietario"
            type="text"
            className="form-control"
            placeholder="Nome e cognome..."
            value={proprietario}
            onChange={(e) => setProprietario(e.target.value)}
          />
        </div>

        <div className="col-sm-2">
          <label htmlFor="inputTarga" className="form-label">
            Targa:
          </label>
          <input
            id="inputTarga"
            type="text"
            className="form-control"
            placeholder="Numero di targa..."
            value={targa}
            onChange={(e) => setTarga(e.target.value.toUpperCase())}
          />
        </div>

        <div className="col-sm-2">
          <label htmlFor="inputModello" className="form-label">
            Modello:
          </label>
          <input
            id="inputModello"
            type="text"
            className="form-control"
            placeholder="Digitare il modello..."
            value={modello}
            onChange={(e) => setModello(e.target.value)}
          />
        </div>

        <div className="col-sm-3">
          <label
            htmlFor="inputAssicurazione"
            className="form-label"
          >
            Scadenza assicurazione:
          </label>
          <input
            id="inputAssicurazione"
            type="date"
            className="form-control"
            value={assicurazione}
            onChange={(e) =>
              setAssicurazione(e.target.value)
            }
          />
        </div>

        <div className="col-sm-3 d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Aggiungi
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemTarga;
