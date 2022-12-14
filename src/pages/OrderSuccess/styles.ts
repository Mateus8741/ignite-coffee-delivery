import styled from 'styled-components'

export const OrderSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const TitleText = styled.h1`
  font-family: 'Baloo 2';
  font-weight: bolder;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`

export const OrderDatailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
