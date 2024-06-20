import React from 'react'
import "./Tarjeta.css"
import Texto from "./Texto"
// import imagen from './public/Ejer'
const Tarjeta = () => {
  return (

     <div className="contenedor">
      
        <Texto/>   
        <div className='imagen'>
        <img src="./EjercicioB.png" alt="" />
        </div>
    </div>
  )
}

export default Tarjeta