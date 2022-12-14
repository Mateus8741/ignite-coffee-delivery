import { ReactNode } from 'react'
import { SectionTitleContaier, SubTitle, Title } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContaier>
      {icon}
      <div>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
    </SectionTitleContaier>
  )
}
