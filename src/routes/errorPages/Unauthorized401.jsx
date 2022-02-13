import styled, {keyframes} from 'styled-components'
import {useNavigate} from 'react-router-dom'

export default() => {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>401</h1>
      <h2>Unauthorized</h2>
      <Button onClick={() => navigate('/')}>Go Back</Button>
    </Container> 
  )
}

const Container = styled.div`
  width:100%;
  height:100vh;
  position:relative;
  background: #19191B;
  overflow:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  flex-direction:column;
  h1 {
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 25vw;
    display:block;
    margin:0;
    color: #E01E5A;
    position:relative;
    z-index:0;
    animation: colors .4s ease-in-out forwards;
    animation-delay: 1.7s;
    &:before{
      content: "U";
      position: absolute;
      top: -8%;
      right: 40%;
      transform:rotate(180deg);
      font-size: 12vw;
      color:#f6c667;
      z-index:-1;
      text-align:center;
      animation:lock .2s ease-in-out forwards;
      animation-delay: 1.5s;
    }
  }
  h2{
    font-family: 'Cabin', sans-serif;
    color: #E01E5A;
    font-size: 4vw;
    margin:0;
    text-transform:uppercase;
    text-align:center;
    animation: colors .4s ease-in-out forwards;
    animation-delay: 2s;
  }
`

const Button = styled.a`
  color: #FFF;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 25px;
  border-radius: 4px;
  margin-right: 10px;
  margin-top: 5vh;
  background: #E01E5A;

  text-decoration: none;
  transition: all 0.3s linear;
  :hover {
    background: transparent;
    outline: 1px solid #E01E5A;
  }
`

const lockAnim = keyframes`
	50%{top:-4%;}
	100%{top:-6%;}
`
const colorsAnim = keyframes`
	50%{transform:scale(1.1);}
	100%{color:#ca3074;}
`

const showAnim = keyframes`
	100%{opacity:1;}
`
