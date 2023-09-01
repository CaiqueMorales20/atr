import { Bell, HeaderS, Logo, Title, TitleContainer } from './style'

// Images
import LogoImg from '../../assets/header/logo.svg'
import BellImg from '../../assets/header/bell.svg'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <HeaderS>
      <TitleContainer>
        <Logo src={LogoImg} />
        <Title>ATR / Portal do professor</Title>
      </TitleContainer>
      <Bell src={BellImg} />
    </HeaderS>
  )
}
