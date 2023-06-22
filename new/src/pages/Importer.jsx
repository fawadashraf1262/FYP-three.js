import React from 'react'
import Home from './Home'
import CanvasModel from '../canvas'
import Customizer from './Customizer'


const Importer = () => {
  return (
    <main className='app transition-all ease-in'>
        <Home/>
        <CanvasModel/>  
        <Customizer/>
    </main>
  )
}

export default Importer