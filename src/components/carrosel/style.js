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
  color: #808080;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-decoration: line-through;
 }
`

export const Card = styled.div`
 & {
  text-decoration: none;
  cursor: pointer;
 }
 
 display: flex;
 width: 320px;
 height: 31.25rem;
 padding: 1.25rem;
 flex-direction: column;
 text-align: center;
 justify-content: start;
 gap: .125rem;
 border-radius: .625rem;
 background: #fff;
 border: none;
 box-shadow: 0rem .1875rem 1.1875rem 0rem #00000038;
 
 #subtitle {
  font-family: 'Poppins', sans-serif;
  margin-top: .0125rem;
  color: #808080;
  text-align: start;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
 }

 #antepenultimo {
  color: #3F3F40;
  flex: 1 0 0;
  text-align: start;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
 }

 #penultimo {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: .9375rem;
  line-height: 1.125rem;
  color: #3F3F40;
  margin-bottom: .125rem;
 }

 #ultimo {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: .8625rem;
  line-height: 1.125rem;
  color: #F71963;
 }

 .container_card {
  text-align: start;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
 }
`

export const ButtonComprar = styled.button`
 font-family: 'Poppins', sans-serif;
 color: #FFFFFF;
 font-weight: 700;
 border-radius: .25rem;
 font-size: .875rem;
 border: none;
 cursor: pointer;
 background-color: #F71963;
 height: 2.75rem;
 width: 100%;
 margin-top: 1.25rem;
`

export const Title = styled.h3`
 height: 2.875rem;
 width: 100%;
 font-family: 'Poppins', sans-serif;
 font-weight: 300;
 color: #3F3F40;
 margin-bottom: .5rem;
`