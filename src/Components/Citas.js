import React from 'react';
import PropTypes from 'prop-types';

const Citas = ({citas, eliminar}) => {
    return (
        <>
        <div className='cita'>
            <p>Mascota: <span>{citas.mascota}</span></p>
            <p>Propietario: <span>{citas.propietario}</span></p>
            <p>Fecha: <span>{citas.fecha}</span></p>
            <p>Hora: <span>{citas.hora}</span></p>
            <p>Sintomas: <span>{citas.sintomas}</span></p>
            <button className='button eliminar u.full.width'
                    onClick={()=>eliminar(citas.id)}
            >&times;Eliminar</button>
        </div>
        </>
      );
}
Citas.propTypes={
    citas:PropTypes.object.isRequired,
    eliminar:PropTypes.func.isRequired
}
 
export default Citas;