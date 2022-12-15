import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  ConfirmationSectionContainer,
  Price,
  TitlePrice,
  TitleTotal,
  TotalPrice,
} from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDelivery = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      {cartQuantity > 0 && (
        <>
          <div>
            <TitlePrice>Total de itens</TitlePrice>
            <Price>R$ {formattedItemTotal}</Price>
          </div>
          <div>
            <TitlePrice>Entrega</TitlePrice>
            <Price>R$ {formattedDelivery}</Price>
          </div>
          <div>
            <TitleTotal>Total</TitleTotal>
            <TotalPrice>R$ {formattedCartTotal}</TotalPrice>
          </div>

          <Button
            text="Confirmar Pedido"
            disabled={cartQuantity <= 0}
            type="submit"
          />
        </>
      )}
    </ConfirmationSectionContainer>
  )
}
