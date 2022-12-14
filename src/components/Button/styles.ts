import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  background: ${(props) => props.theme['yellow-yellow']};
  font-size: 14;
  line-height: 160%;
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
