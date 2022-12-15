import styled from 'styled-components'

export const CartContainer = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  width: fit-content;
  display: flex;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple-purple']};
  }
`
