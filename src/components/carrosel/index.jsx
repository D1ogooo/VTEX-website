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
      <h2>{tech.subtitle}</h2>
      <p>{tech.antepenultimoTitle}</p>
      <h3>{tech.penultimoTitle}</h3>
      <h4>{tech.ultimoTitle}</h4>
      <ButtonComprar>
       comprar
      </ButtonComprar>
     </Card>
    ))}
   </CardPai>
  </>
 )
}