import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const TitlePrice = styled.h2`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`

export const Price = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
`

export const TitleTotal = styled.h2`
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const TotalPrice = styled.h2`
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
