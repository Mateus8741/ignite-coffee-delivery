import styled from 'styled-components'
import Background from '../../assets/Background.png'

export const IntroContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;
  background-image: url(${Background});
  background-repeat: round;
  padding: 5.75rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 4rem;
  }

  aside {
    max-width: 36.75rem;

    h1 {
      font-family: 'Baloo 2';
      font-weight: 900;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }

    h3 {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 4.125rem;
    }
  }
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 0;
`
