import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import {
  CompleteOrderFormContainer,
  FormSectionContainer,
  Title,
} from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <Title>Complete seu pedido</Title>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color="#C47F17" />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color="#8047F8" />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
