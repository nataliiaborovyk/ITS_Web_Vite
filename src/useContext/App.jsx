import React, { createContext, useContext, useState } from "react";

// 1) Creo lo zaino (Context)
const CounterContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  // 2) Avvolgo i figli e metto nello zaino i "panini":
  //    in questo caso: { count, setCount }
  //  Nel componente padre (App) metto nel Provider cosa voglio condividere: { count, setCount }.
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Contatore />
      <Pulsanti />
    </CounterContext.Provider>
  );
};


// I figli (Contatore, Pulsanti) chiamano useContext(CounterContext) e prendono quello che serve.

const Contatore = () => {
  // 3) Prendo dallo zaino ciò che mi serve
  const { count } = useContext(CounterContext);
  return <h3>Valore: {count}</h3>;
};

const Pulsanti = () => {
  // 3) Prendo dallo zaino anche setCount
  const { setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount((n) => n + 1)}>+1</button>
      <button onClick={() => setCount((n) => n - 1)}>-1</button>
    </div>
  );
};

export default App;
