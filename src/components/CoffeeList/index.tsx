import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'
import { Cart } from '../Cart'
import { Counter } from '../Counter'
import { CardFooter, CoffeeListContainer, Content } from './styles'

export interface CardProps {
  id: number
  srcImg: string
  tags: string[]
  title: string
  description: string
  price: number
}

interface CoffeeProps {
  data: CardProps
}

export function CoffeeList({ data }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...data,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const Price = formatMoney(data.price)

  return (
    <CoffeeListContainer>
      <img src={data.srcImg} alt={data.title} />
      <Content>
        {data.tags.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </Content>
      <CardFooter>
        <span>
          R$ <strong>{Price}</strong>
        </span>
        <Counter
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <Cart onClick={handleAddToCart} />
      </CardFooter>
    </CoffeeListContainer>
  )
}
