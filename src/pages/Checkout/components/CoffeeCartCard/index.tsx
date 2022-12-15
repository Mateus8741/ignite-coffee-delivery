import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  CoffeeTitle,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.quantity * coffee.price

  const formattedPrice = formatMoney(coffeeTotal)

  function handleIncrease(e: any) {
    e.preventDefault()
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease(e: any) {
    e.preventDefault()
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveToCart() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.srcImg} alt={coffee.title} />
        <div>
          <CoffeeTitle>{coffee.title}</CoffeeTitle>
          <ActionsContainer>
            <Counter
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemoveToCart}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
