import styled from 'styled-components'

export const FullContent = styled.div`
 display: flex;
 align-items: center;
 gap: 10rem;
 margin-top: 1.25rem;
`

export const Content = styled.section`
width: 100%;

 img {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%);
  border-radius: 1.25rem;
  z-index: -1;
  width: 98%;
  height: 350px;
 }
`

export const TextContent = styled.div`
 z-index: 1;
 margin-top: -15.625rem;
 margin-left: 2rem;
 h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-size: 2.5rem;
  width: 12.25rem;
  height: 3.75rem;
  color: #fff;
 }
 p {
  color: #fff;
  width: 11.3125rem;
  height: 3rem;
  font-family: 'Poppins', sans-serif;
 }
`

export const ButtonConferir = styled.button`
 font-family: 'Poppins', sans-serif;
 margin-left: 2rem;
 margin-top: 1.8rem;
 cursor: pointer;
 background-color: #F71963;
 border: none;
 border-radius: .625rem;
 color: #fff;
 border-radius: .625rem;
 width: 8.1875rem;
 height: 3rem;
 letter-spacing: 8%;
 align-items: center;
 font-weight: 900;
`