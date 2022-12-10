import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { HeroItem } from '../HeroItem'

import { IntroContainer, Wrapper } from './styles'

import CoffeeImage from '../../assets/CoffeeImage.svg'

export function Intro() {
  return (
    <IntroContainer>
      <aside>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <Wrapper>
          <HeroItem
            color="yellow-dark"
            icon={<ShoppingCart weight="fill" />}
            text="Compra simples e segura"
          />
          <HeroItem
            color="gray"
            icon={<Package weight="fill" />}
            text="Embalagem mantém o café intacto"
          />
          <HeroItem
            color="yellow"
            icon={<Timer weight="fill" />}
            text="Entrega rápida e rastreada"
          />
          <HeroItem
            color="purple"
            icon={<Coffee weight="fill" />}
            text="O café chega fresquinho até você"
          />
        </Wrapper>
      </aside>
      <div>
        <img src={CoffeeImage} alt="" />
      </div>
    </IntroContainer>
  )
}
