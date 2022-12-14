import React, { useState } from 'react'

const App: React.FC = () => {
  const [name, setName] = useState('zsw')
  const change=()=>{
    setName('ljhx')
  }
  return (
    <>
      <div>{name}</div>
      <button onClick={() => change()}></button>
    </>
  )
}
export default App