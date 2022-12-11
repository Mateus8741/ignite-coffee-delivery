import { Counter } from '../../components/Counter'
import { Intro } from '../../components/Intro'

export function Home() {
  return (
    <div>
      <Intro />
      <main>
        <Counter />
      </main>
    </div>
  )
}
