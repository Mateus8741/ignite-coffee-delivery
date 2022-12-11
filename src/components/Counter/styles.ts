import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['purple-purple']};
    border: none;
    background: ${(props) => props.theme['base-button']};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
