import { Content } from './style';
import { Container } from '../../style/GlobalStyle';
import { Sessoes } from './data';

export const SecondEscolha = () => {
  return (
   <>
    <Container>
     <Content>
      {Sessoes.map((card) => (
       <section key={card.id}>
       <div id='card'>
        <img src={card.img} alt={card.alt} />
       </div>
        <p>{card.text}</p>
       </section>
      ))}
     </Content>
    </Container>
   </>
  )
}