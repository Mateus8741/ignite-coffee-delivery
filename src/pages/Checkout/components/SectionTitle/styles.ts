import styled from 'styled-components'

export const SectionTitleContaier = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`
