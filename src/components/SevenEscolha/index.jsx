import { Content, SubContent, SubFooter } from './style.js'
import { Container } from '../../style/GlobalStyle.js'
import facebookIcon from '../../assets/023-facebook.svg'
import instagramIcon from '../../assets/044-instagram.svg'
import youtubeIcon from '../../assets/116-youtube.svg'
import visaIcon from '../../assets/visa.svg'
import eloIcon from '../../assets/elo.svg'
import aleloIcon from '../../assets/alelo.svg'
import dinnersIcon from '../../assets/dinners.svg'
import ifoodIcon from '../../assets/ifood.svg'
import mastercardIcon from '../../assets/mastercard.svg'
import pixIcon from '../../assets/pix.svg'
import amexIcon from '../../assets/amex.svg'
import ticketIcon from '../../assets/ticket.svg'
import sodexoIcon from '../../assets/sodexo.svg'

function SevenEscolha () {
  return (
   <>
    <Content>
     <Container>
      <SubContent>
       <section id='first_section'>
        <h1>Sobre nós</h1>
        <p>CONHEÇA</p>
        <p>COMO COMPRAR</p>
        <p>INDICAÇÃO E DESCONTO</p>
        <div>
         <img src={facebookIcon}/>   
         <img src={instagramIcon}/>   
         <img src={youtubeIcon}/>   
        </div>
       </section>

       <section id='second_section'>
        <h1>INFORMAÇÕES ÚTEIS</h1>
        <p>FALE CONOSCO</p>
        <p>DÚVIDAS</p>
        <p>Prazos de Entrega</p>
        <p>Formas de Pagamento</p>
        <p>Política de privacidade</p>
        <p>Trocas e Devoluções</p>
       </section>

       <section id="third_section">
        <div>
         <img src={visaIcon}/>   
         <img src={eloIcon}/>   
         <img src={aleloIcon}/>   
        </div>
        <div>
         <img src={dinnersIcon}/>   
         <img src={ifoodIcon}/>   
         <img src={mastercardIcon}/>       
        </div>
        <div>
         <img src={pixIcon}/>   
         <img src={amexIcon}/>   
         <img src={ticketIcon}/>     
        </div>
        <img src={sodexoIcon}/>
       </section>
       
       <section id='for_section'>
        <h2>Cadastre-se e Receba nossas novidades e promoções</h2>
        <h3>novidades e promoções</h3>
        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
        <input type="email" placeholder='SEU E-MAIL'/>
        <button>OK</button>
       </section>
      </SubContent>
     </Container>
     <SubFooter>
      <hr />
      <Container>
       <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br/> 
       É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
      </Container>
     </SubFooter>
    </Content>
   </>
  )
}

export default SevenEscolha