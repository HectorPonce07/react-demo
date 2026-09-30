import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Button from './components/Button'


function App() {
  const[contador, setContador] = useState(0)
  return (
    <>
      <h1 className='text-6xl'>Contador: {contador}</h1>
      <Button text={'Incrementar'} funcionalidad={() => setContador(contador + 1)}/>
      <Button text={'Decrementar'} funcionalidad={() => setContador(contador - 1)}/>  
    </>
  )
}

export default App
