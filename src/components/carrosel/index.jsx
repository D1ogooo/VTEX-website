import { dbTech } from './data';
import { Card, CardPai, ButtonComprar, Title } from './style'
import { useState, useRef } from 'react';

export const Carrosel = () => {
  const cardPai = useRef(null)

  function handleLeftClick (e) {
    if(cardPai.current) {
    e.preventDefault()
    cardPai.current.scrollLeft -= cardPai.current.offsetWidth;
   }
  }

  function handleRightClick (e) {
    if(cardPai.current) {
    e.preventDefault()
    cardPai.current.scrollLeft -= cardPai.current.offsetWidth;
   }
  }

  return (
  <>
   <CardPai ref={cardPai}>
    {dbTech.map((tech) => (
     <Card key={tech.id}>
      <img src={tech.img}/>
       <Title>{tech.title}</Title>
      <div className='container_card'>
      <h2 id='subtitle'>{tech.subtitle}</h2>
      <p id='antepenultimo'>{tech.antepenultimoTitle}</p>
      <h3 id='penultimo'>{tech.penultimoTitle}</h3>
      <h4 id='ultimo'>{tech.ultimoTitle}</h4>
      </div>
      <ButtonComprar>
       comprar
      </ButtonComprar>
     </Card>
    ))}
   </CardPai>
  </>
 )
}