import { Cart, HeaderContainer, Location } from './styles'

import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <Location>
          <MapPin size={22} weight="fill" color="#8047F8" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/Checkout" title="Cart">
          <Cart>
            <ShoppingCart weight="fill" size={22} color="#C47F17" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
