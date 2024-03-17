import { Title, Content, First, Second, Third } from './style.js'
import { Carrosel } from '../carrosel/index.jsx'
import { Container } from '../../style/GlobalStyle'

export const ThirdEscolha = () => {
  return (
    <>

    <Container>
      <Content>
       <First>
       <hr id='first_line'/>
        <Title>Produtos relacionados</Title>
       <hr id='second_line'/>
       </First>

       <Second>
        <button id='principal'>celular</button>
        <button>acessórios</button>
        <button>tablets</button>
        <button>notebooks</button>
        <button>TVs</button>
        <button>Ver todos</button>
       </Second>
      </Content>
      </Container>

    <Container>
     <Third>
      <Carrosel/>
     </Third>
    </Container>
  </>
 )
}
