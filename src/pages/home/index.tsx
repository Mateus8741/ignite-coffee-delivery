import { HomeContainer } from './styles'

import { Intro } from '../../components/Intro'

import { CoffeeList } from '../../components/CoffeeList'

import dados from '../../utils'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <main>
        {dados.map((item) => (
          <CoffeeList key={item.id} data={item} />
        ))}
      </main>
    </HomeContainer>
  )
}
