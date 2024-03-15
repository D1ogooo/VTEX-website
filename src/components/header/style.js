import styled from 'styled-components'

export const Content = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 
 height: 4.5rem;
 border-top: solid .0625rem #F0F0F0;
 border-bottom: solid .0625rem #F0F0F0;
 margin-top: 1.25rem;

 nav {
  display: flex;
  align-items: center;
  width: 60%;
  img {
   width: 1.75rem;
   height: 1.75rem;
  }
 }
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
 width: 100%;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 font-family: 'Poppins', sans-serif;
 background-color: #F6F5F2;
 height: 3rem;
 border-radius: .625rem;
 
 ::placeholder {
  color: #9F9F9F;
  width: 12.3125rem;
  height: 1.3125rem;
  font-weight: 500;
  size: 1.0625rem;
  line-height: 1.3125rem;
 }

 img {
  height: 1.75rem;
  width: 1.75rem;
  color: #9F9F9F;
  margin-right: .8rem;
 }

 input {
  font-size: 13px;
  color: #9F9F9F;
  width: 100%;
  height: 3rem;
  margin-left: 1.25rem;
  border-radius: .625rem;
  border: none;
  background-color: #F6F5F2;
 }
`

export const Icons = styled.section`
 display: flex;
 gap: 2rem;

 img {
  cursor: pointer;
 }
`