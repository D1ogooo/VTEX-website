import styled from 'styled-components'

export const Content = styled.div`
 display: flex;
 justify-content: space-evenly;
 height: 4.5rem;
 border-top: solid .0625rem #F0F0F0;
 border-bottom: solid .0625rem #F0F0F0;
 margin-top: 1.25rem;
`

export const Logo = styled.div`
 display: flex;

 p {
  width: 1.1569rem;
  height: 1.335rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin-top: .7rem;
  margin-left: .2rem;
  font-size: 1.875rem;
  color: #F71963;
 }

 img {
  width: 3.6956rem;
  height: 3.165rem;
 }
`

export const Search = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 font-family: 'Poppins', sans-serif;
 height: 3rem;
 background-color: #F6F5F2;
 
 ::placeholder {
  color: #9F9F9F;
  width: 12.3125rem;
  height: 1.3125rem;
  font-weight: 500;
  size: .875rem;
  line-height: 1.3125rem;
 }

 img {
  height: 1.75rem;
  width: 1.75rem;
  color: #9F9F9F;
 }

 input {
  border: none;
  background-color: #F6F5F2;
 }
`