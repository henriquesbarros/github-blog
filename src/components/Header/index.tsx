import { HeaderContainer } from './styles'
import logo from '../../public/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </HeaderContainer>
  )
}
