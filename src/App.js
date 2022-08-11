import { useState } from 'react';
import './App.css';

import Tabla from "./componentes/Tabla";

function App() {
  const [datos, setDatos] = new useState(null);

  const consultaApi = () => {
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=10').then((r) => {return r.json()}).then((respuesta) => {
      setDatos(respuesta.results);
    });
  }
  consultaApi();

  console.log(datos);
  
  return (
    <div className="App">
      <section className="App-header">
        <div className='contenedorHeader'>
          <h1>Condiciones Atmosfericas</h1>
          <p>By Daniel Garcia 7u7</p>
        </div>

        <div className='contenedorContenido'>
          {/* <Tabla datosTabla={} className="miTabla"/> */}
        </div>
      </section>


    </div>
  );
}

export default App;
