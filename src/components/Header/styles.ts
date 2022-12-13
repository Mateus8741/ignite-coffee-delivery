import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  &::after {
    content: '3';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 150px;
    top: 25px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  align-items: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-decoration: none;
`

export const Cart = styled.div`
  display: flex;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  align-items: center;
  cursor: pointer;
`
