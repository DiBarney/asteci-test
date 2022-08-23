import { useState, useEffect } from 'react';
import './App.css';

import Tabla from "./componentes/Tabla";

function App() {
  const [datos, setDatos] = new useState(null);
  const [paginacion, setPaginacion] = new useState(null);
  const [respuesta, setRespuesta] = new useState(null);

  useEffect(() => {
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=10').then((r) => {
      return r.json();
    }).then((respuesta) => {
      setDatos(respuesta.results);
      setPaginacion(respuesta.pagination);
      setRespuesta(true);
    });
  },[]);
  
  if(respuesta){
    return (
      <div className="App">
        <section className="App-header">
          <div className='contenedorHeader'>
            <h1>Condiciones Atmosfericas</h1>
            <p>By Daniel Garcia 7u7</p>
          </div>
  
          <div className='contenedorContenido'>
            <Tabla datosTabla={datos} paginacionTabla={paginacion} className="miTabla"/>
          </div>
        </section>  
      </div>
    );
  }else{
    return (
      <div className="App">
        <section className="App-header">
          <div className='contenedorHeader'>
            <h1>Condiciones Atmosfericas</h1>
            <p>By Daniel Garcia 7u7</p>
          </div>
  
          <div className='contenedorContenido'>
            <div>Cargando datos...</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
