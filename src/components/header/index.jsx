import { Content, Logo, Search } from './style'
import { Container } from '../../style/GlobalStyle'
import ImageLogo from '../../assets/Caminho 1551.svg'
import SearchIcon from '../../assets/search icon.svg'
import FirstIcon from '../../assets/first icon header.svg'
import SecondIcon from '../../assets/second icon header.svg'
import ThirdIcon from '../../assets/third icon header.svg'
import ForIcon from '../../assets/for icon header.svg'

export const Header = () => {
  return (
  <>
   <Container>
    <Content>
     <Logo>
      <img src={ImageLogo}/>
      <p>VTEX</p>
     </Logo>
     <nav>
     <Search>
      <input type="search" id="search" placeholder='O que você está buscando?'/>
      <img src={SearchIcon}/>
     </Search>
      <img src={FirstIcon}/>
      <img src={SecondIcon}/>
      <img src={ThirdIcon}/>
      <img src={ForIcon}/>
     </nav>
    </Content>
   </Container>
  </>
 )
}