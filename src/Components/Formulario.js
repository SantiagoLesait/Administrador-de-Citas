import {React, useState} from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {
    const [cita, actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    const [error, actualizarError]=useState(false)

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas}=cita

    const despacharSubmit = e =>{
        e.preventDefault()
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' 
        || sintomas.trim()===''){
            actualizarError(true)
            return
        }cita.id=uuid()
        actualizarError(false)
        crearCita(cita)

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
        
    }

    return ( 
        <>
        <h1>Crear Cita</h1>
        {error?<p className='alerta-error'>Todos los campos son obligatorios</p> : null}
        <form
        onSubmit={despacharSubmit}
        >
            <label>Mascota</label>
            <input
            type='text'
            name='mascota'
            className='u-full-width'
            placeholder='Nombre de la mascota'
            onChange={actualizarState}
            value={mascota}
            />
            <label>Propietario</label>
            <input
            type='text'
            name='propietario'
            className='u-full-width'
            placeholder='Nombre del dueño'
            onChange={actualizarState}
            value={propietario}
            />
            <label>Fecha</label>
            <input
            type='date'
            name='fecha'
            className='u-full-width'
            onChange={actualizarState}
            value={fecha}
            />
            <label>Hora</label>
            <input
            type='time'
            name='hora'
            className='u-full-width' 
            onChange={actualizarState} 
            value={hora}         
            />
            <label>Sintomas</label>
            <textarea
            name='sintomas'
            className='u-full-width'
            onChange={actualizarState}
            value={sintomas}>
            </textarea>
            <button
            type='submit'
            className='u-full-width button-primary'>Agregar</button>
        </form>
        </>
     );
}
Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}
 
export default Formulario;