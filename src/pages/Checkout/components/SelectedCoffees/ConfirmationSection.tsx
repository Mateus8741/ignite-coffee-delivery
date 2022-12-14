import { Button } from '../../../../components/Button'
import {
  ConfirmationSectionContainer,
  Price,
  TitlePrice,
  TitleTotal,
  TotalPrice,
} from './styles'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <TitlePrice>Total de itens</TitlePrice>
        <Price>R$ 9,90</Price>
      </div>
      <div>
        <TitlePrice>Entrega</TitlePrice>
        <Price>R$ 3,50</Price>
      </div>
      <div>
        <TitleTotal>Total</TitleTotal>
        <TotalPrice>R$ 29,90</TotalPrice>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}
