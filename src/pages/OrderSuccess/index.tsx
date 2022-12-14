import {
  OrderDatailsContainer,
  OrderSuccessContainer,
  SubTitle,
  TitleText,
} from './styles'

import SVG from '../../assets/OrderSuccess_illustration.svg'
import { HeroItem } from '../../components/HeroItem'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

export function OrderSuccess() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                {<br />}
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </SubTitle>
            }
          />
        </OrderDatailsContainer>
        <img src={SVG} alt="" />
      </section>
    </OrderSuccessContainer>
  )
}
