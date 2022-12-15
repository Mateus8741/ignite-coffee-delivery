import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  onIncrease: (e: any) => void
  onDecrease: (e: any) => void
}

export function Counter({ quantity, onIncrease, onDecrease }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={onDecrease} disabled={quantity <= 1}>
        <Minus weight="bold" size={14} />
      </button>
      <div>{quantity}</div>
      <button onClick={onIncrease}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterContainer>
  )
}
