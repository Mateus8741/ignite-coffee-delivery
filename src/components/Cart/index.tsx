import { ShoppingCartSimple } from 'phosphor-react'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
    </CartContainer>
  )
}
