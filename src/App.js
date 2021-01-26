import Formulario from './Components/Formulario'
import {React, useState, useEffect} from 'react';
import Citas from './Components/Citas'

function App() {

  let citasIniciales=JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[]
  };

  const [citas, agregarCitas]=useState(citasIniciales)

  const crearCita = cita =>{
    agregarCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id =>{
    const nuevaLista=citas.filter(citas=>citas.id!==id);
    agregarCitas(nuevaLista)
  }

  useEffect(()=>{
      localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  const titulo=citas.length===0? 'No hay citas' : 'Administra tus citas'

  return (
    <div>

      <h1>Administracion de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita}/>
          </div>
          <div className='one-half column'>
            <h1>{titulo}</h1>
            {citas.map(citas=>
              <Citas 
              eliminar={eliminarCita}
              key={citas.id}
              citas={citas}/>)}
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default App;
