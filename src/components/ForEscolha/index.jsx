import { Container } from '../../style/GlobalStyle'
import { FullContent, Content, TextContent, ButtonConferir } from './style'
import ParceirosImage from '../../assets/127527636681ae5d6bad03d09c79aeaf.png'

export const ForEscolha = () => {
 const Contents = [
  {
   id: 0,
   img: `${ParceirosImage}`,
  },
  {
   id: 1,
   img: `${ParceirosImage}`,
  },
 ]

 return (
  <>
   <Container>
    <FullContent>
     {Contents.map((card) => (
     <Content key={card.id}>
      <img src={card.img}/>
      <TextContent>
       <h1>Parceiros</h1>
       <p>Lorem ipsum dolor site<br/>amet consectetur</p>
      </TextContent>
      <ButtonConferir>
       confira
      </ButtonConferir>
     </Content>))}
    </FullContent>
   </Container>        
  </>
 )
}