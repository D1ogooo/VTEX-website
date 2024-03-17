import styled from 'styled-components'

export const Content = styled.section`
 display: flex;
 align-items: center;
 justify-content: space-around;
 margin-top: -3.4375rem;
 margin-bottom: 1.25rem;
 
 section {
  display: flex;
  flex-direction: column;
  align-items: center;

  p { 
   margin-top: 20px;
   display: flex;
   width: auto;
  }
 }

 #card {
  padding: 1.25rem;
 }

 div {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 8rem;
  height: 8rem;
  border-radius: .625rem;
  background-color: #fff;
  box-shadow: 0rem .125rem .5625rem 0rem #00000038;
 }

 p {
  font-family: 'Poppins', sans-serif;
  color: #F71963;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  width: 5.625rem;
  height: 1.5rem;
 }
`