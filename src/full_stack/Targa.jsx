import React, { useState, useRef } from "react";

/* Dato un form di inserimento di un utente e una targa.
   Implementare un sistema che inserisca gli utenti
   e li visualizzi in una tabella.
   Se la targa è già stata inserita non è possibile inserirla nuovamente.
*/

const Targa = () => {
  const proprietarioRef = useRef(null);
  const targaRef = useRef(null);

  const [officina, setOfficina] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const proprietario = proprietarioRef.current.value;
    const targa = targaRef.current.value;

    if (proprietario && targa) {
      const checkTarga = officina.some((i) => i.targa === targa);

      if (checkTarga) {
        alert("Non possono esserci più targhe uguali!");
        return;
      }

      setOfficina([
        ...officina,
        {
          proprietario,
          targa,
        },
      ]);

      proprietarioRef.current.value = "";
      targaRef.current.value = "";
    } else {
      console.log("compilare nome e cognome");
    }

    console.log("submit form");
  };

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label
            htmlFor="inputProprietario"
            className="form-label"
          >
            Proprietario
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProprietario"
            ref={proprietarioRef}
            name="proprietario"
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputTarga" className="form-label">
            Targa
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTarga"
            ref={targaRef}
            name="targa"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </div>
      </form>

      {officina && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Proprietario</th>
              <th>Targa</th>
            </tr>
          </thead>
          <tbody>
            {officina.map((o) => (
              <tr key={o.targa}>
                <td>{o.proprietario}</td>
                <td>{o.targa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Targa;
