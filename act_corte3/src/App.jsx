import { useState } from 'react'


import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario></Formulario>
    </>
  )
}

export default App
