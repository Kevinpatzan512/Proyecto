import React from 'react'

export const VideoFondo = () => {
  return (
    <div className='videoFondo'>
        <video autoPlay loop muted >
            <source src='/videofondo.mp4'/>
        </video>
    </div>
  )
}
