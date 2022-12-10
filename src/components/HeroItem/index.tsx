import { ReactNode } from 'react'
import { HeroItemContainer, IconWrapper } from './styles'

export type colorsType = 'yellow-dark' | 'yellow' | 'gray' | 'purple'
interface HeroItemsProps {
  text: string
  icon: ReactNode
  color: colorsType
}

export function HeroItem({ color, icon: Icon, text }: HeroItemsProps) {
  return (
    <HeroItemContainer>
      <IconWrapper color={color}>{Icon}</IconWrapper>
      <p>{text}</p>
    </HeroItemContainer>
  )
}
