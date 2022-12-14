import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  CoffeeTitle,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://github.com/Mateus8741.png" alt="" />
        <div>
          <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
          <ActionsContainer>
            <Counter />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
