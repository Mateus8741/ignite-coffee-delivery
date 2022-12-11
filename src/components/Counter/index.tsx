import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CounterContainer } from './styles'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function Subtract() {
    if (counter > 0) {
      return setCounter((state) => state - 1)
    }
  }

  function Add() {
    setCounter((state) => state + 1)
  }

  return (
    <CounterContainer>
      <button onClick={Subtract}>
        <Minus weight="bold" size={14} />
      </button>
      <div>{counter}</div>
      <button onClick={Add}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
