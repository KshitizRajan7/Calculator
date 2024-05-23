import React from 'react'
import './App.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
const App = () => {
  return (
    <div className='calculator'>
      <Display/>
      <ButtonContainer/>
    </div>
  )
}

export default App
