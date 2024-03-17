import styled from "styled-components";

export const CardPai = styled.div`
 display: flex;
 width: 100%;
 scroll-behavior: smooth;
 
 overflow-x: auto;
 overflow: hidden;
 
 align-items: start;
 justify-content: start;
 margin-bottom: 2.9375rem;
 gap: 27px;

 h2 {
  color: #000;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }
`

export const Card = styled.div`
 & {
  text-decoration: none;
  cursor: pointer;
 }

 display: flex;
 width: 20.9rem;
 height: 500px;

 flex-direction: column;
 text-align: center;
 gap: 0.9375rem;
 border-radius: 0.5rem;
 background: #fff;
 border: 0.0625rem solid #000;
 box-shadow: 0rem .1875rem 1.1875rem 0rem #00000038;

 h1 {
  margin-top: -1px;
  color: #000;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
 }

 p {
  color: #000;
  flex: 1 0 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
 }
`

export const ButtonComprar = styled.button`
 background-color: #F71963;
`

export const Title = styled.h1`
 
`