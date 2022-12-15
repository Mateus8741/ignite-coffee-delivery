import {
  OrderDatailsContainer,
  OrderSuccessContainer,
  SubTitle,
  TitleText,
} from './styles'

import SVG from '../../assets/OrderSuccess_illustration.svg'
import { HeroItem } from '../../components/HeroItem'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderSuccess() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>
  return (
    <OrderSuccessContainer>
      <div>
        <TitleText>Uhu! Pedido confirmado</TitleText>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
      </div>

      <section>
        <OrderDatailsContainer>
          <HeroItem
            icon={<MapPin weight="fill" />}
            color="purple"
            text={
              <SubTitle>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                {<br />}
                {state.district} - {state.city}, {state.uf}
              </SubTitle>
            }
          />
          <HeroItem
            icon={<Clock weight="fill" />}
            color="yellow"
            text={
              <SubTitle>
                Previsão de entrega {<br />}
                <strong>20 min - 30 min</strong>
              </SubTitle>
            }
          />
          <HeroItem
            icon={<CurrencyDollar weight="fill" />}
            color="yellow-dark"
            text={
              <SubTitle>
                Pagamento na entrega {<br />}
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </SubTitle>
            }
          />
        </OrderDatailsContainer>
        <img src={SVG} alt="" />
      </section>
    </OrderSuccessContainer>
  )
}
