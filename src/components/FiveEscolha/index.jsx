import { Container } from '../../style/GlobalStyle'
import { ForEscolha } from '../ForEscolha'
import { Title, Content, First } from './style'

export const FiveEscolha = () => {
  return (
   <>
    <Container>
     <Content>
      <First>
       <hr id='first_line'/>
        <Title>Produtos relacionados</Title>
       <hr id='second_line'/>
      </First>
       <a href="#" id='vertodos_link'>Ver todos</a>
     </Content>
    </Container>
     <ForEscolha/>
   </>
  )
}