import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: fit-content;
  padding: 0 1.25rem 1.25rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: calc(0px - 1rem - 2px);
  }
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: bolder;
  font-size: 2rem;
  line-height: 130%;
  margin-bottom: 2.125rem;
`

export const Content = styled.div`
  padding-bottom: 2.0625rem;
  padding-top: 0.75rem;
  text-align: center;

  span {
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 130%;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }

  & span + span {
    margin-left: 1rem;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 15rem;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2';
      font-weight: bold;
      color: ${(props) => props.theme['base-text']};
      font-size: 2rem;
      line-height: 130%;
    }
  }
`
