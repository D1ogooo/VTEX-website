import styled from 'styled-components'

export const Content = styled.div`
 background-color: #2A2A2A;
 width: 100%;
 height: 21.3125rem;
`

export const SubContent = styled.div`
 display: flex;
 justify-content: space-between;
 padding-top: 3.125rem;
 margin-bottom: 3.125rem;

 #first_section {
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: .7rem;
    width: 106px;
    height: 1.25rem;
  }

  gap: .5rem; 
   div {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
   }
 }
`

export const SubFooter = styled.div`
 hr {
  margin-bottom: 1.2rem;
 }

 p {
  line-height: 1.4375rem;
  height: 1.625rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: .9375rem;
 }
`