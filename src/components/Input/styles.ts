import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &:placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
