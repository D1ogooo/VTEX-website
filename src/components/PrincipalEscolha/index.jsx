import { Container } from '../../style/GlobalStyle'
import { Content } from './style'
import { FirstButton, SecondButton, ThirdButton, ForButton, FiveButton, SixButton, SevemButton } from './style'
import CoroaIcon from '../../assets/CrownSimple icon.svg'

export const PrincipalEscolha = () => {
 return (
 <>
  <Container>
  <Content>
  <FirstButton>
    TODAS CATEGORIAS
   </FirstButton>
   <SecondButton>
    SUPERMERCADO
   </SecondButton>
   <ThirdButton>
    LIVROS
   </ThirdButton>
   <ForButton>
    MODA
   </ForButton>
   <FiveButton>
    LANÇAMENTOS
   </FiveButton>
   <SixButton>
    OFERTAS DO DIA
   </SixButton>
   <SevemButton>
    <img src={CoroaIcon}/>
    ASSINATURA
   </SevemButton>
  </Content>
  </Container> 
 </>
 )
}