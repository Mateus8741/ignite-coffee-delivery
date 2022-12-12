import { Cart } from '../Cart'
import { Counter } from '../Counter'
import { CardFooter, CoffeeListContainer, Content } from './styles'

interface CardProps {
  data: {
    srcImg: string
    tags: string[]
    title: string
    description: string
    price: string
  }
}

export function CoffeeList({ data }: CardProps) {
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
          R$ <strong>{data.price}</strong>
        </span>
        <Counter />
        <Cart />
      </CardFooter>
    </CoffeeListContainer>
  )
}
