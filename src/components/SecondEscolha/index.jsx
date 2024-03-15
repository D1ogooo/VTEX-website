import { Container } from '../../style/GlobalStyle'
import { Content } from './style'
import { Sessoes } from './data'

export const SecondEscolha = () => {

  return (
   <>
    <Container>
     <Content>
      {Sessoes.map((card) => {
       <>
        <div key={card.id}>
         <img src={card.img}/>
        </div>
       <p>{card.text}</p>
      </>
    })}
   </Content>
  </Container>
 </>
 )
}