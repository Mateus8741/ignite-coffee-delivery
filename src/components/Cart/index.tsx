import { ShoppingCartSimple } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { CartContainer } from './styles'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Cart({ ...props }: CartButtonProps) {
  return (
    <CartContainer {...props}>
      <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
    </CartContainer>
  )
}
