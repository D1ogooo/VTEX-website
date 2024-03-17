import { Container } from '../../style/GlobalStyle'
import { Content, ButtonProduto } from './style'
import Caminho from '../../assets/Rectangle 250.png'

export const PrincipalImage = () => {
 return (
  <>
   <Content>
    <img src={Caminho} id='principal_image'/>
    <Container>
     <div id='principal_image'>
      <h1>Venha conhecer nossas <br/>promoções<br/>50% Off nos produtos</h1>
     </div>
     <ButtonProduto>
      Ver produto
     </ButtonProduto>
    </Container>
   </Content>
  </>
 )
}