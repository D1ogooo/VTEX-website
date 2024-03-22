import { Container } from '../../style/GlobalStyle.js'
import { Title, Content, SecondContent } from './style.js'
import Icon_vtex from '../../assets/Caminho 1551.svg'

function SixEscolha () {
 return (
  <>
   <Container>
    <Content>
     <Title>
      Navegue por marcas
     </Title>
    </Content>
    <SecondContent>
     <section><img src={Icon_vtex}/><p>VTEX</p></section>
     <section><img src={Icon_vtex}/><p>VTEX</p></section>
     <section><img src={Icon_vtex}/><p>VTEX</p></section>
     <section><img src={Icon_vtex}/><p>VTEX</p></section>
     <section><img src={Icon_vtex}/><p>VTEX</p></section>
    </SecondContent>
   </Container>
  </>
  )
}

export default SixEscolha