import { Content, Logo, Search } from './style'
import ImageLogo from '../../assets/Caminho 1551.svg'


export const Header = () => {
  return (
  <>
   <Content>
    <Logo>
     <img src={ImageLogo}/>
     <p>VTEX</p>
    </Logo>
    <nav>
     <Search>
      <input type="search" id="search" placeholder='O que você está buscando?'/>
     </Search>
     
    </nav>
   </Content>
  </>
 )
}