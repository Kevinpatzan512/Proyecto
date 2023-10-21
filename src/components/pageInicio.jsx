import React from 'react'
import {Cuerpo} from './cuerpo'
import {CardsTorneos} from './torneos'
import {VideoFondo} from './fondo'

const PaginaInicio = () => {
  return (
    <>
    <VideoFondo/>
    <Cuerpo/>
    <CardsTorneos/>
    </>
  )
}

export default PaginaInicio