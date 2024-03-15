import { TopContentStyle } from './style'
import ShieldIcon from '../../assets/ShieldCheck icon.svg'
import CartIcon from '../../assets/Truck icon.svg'
import CardIcon from '../../assets/CreditCard icon.svg'

export const TopContent = () => {
 return (
 <>
  <TopContentStyle>
   <section>
    <img src={ShieldIcon}/>
    <p>Compra <span>100%segura</span></p>
   </section>
   <section>
    <img src={CartIcon}/>
    <p>Frete grátis <span>100%segura</span></p>
   </section>
   <section>
    <img src={CardIcon}/>
    <p><span>Parcele</span> suas compras</p>
   </section>
  </TopContentStyle>
 </>
 )
}