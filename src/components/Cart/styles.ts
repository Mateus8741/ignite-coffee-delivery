import styled from 'styled-components'

export const CartContainer = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  width: fit-content;
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['purple-purple']};
  }
`
