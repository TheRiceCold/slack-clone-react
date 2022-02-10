import styled from 'styled-components'
import {SiSlack} from 'react-icons/si'

export default() => ( 
  <Container>
    <SiSlack size={100} color={'whitesmoke'}/>
    <img src='./404.png' style={{height: '150px'}}/>
    <h4>Opps! The page you were looking for was not found</h4>
    <ButtonGroup>
      <Button onclick='history.back(-1)'>Go Back</Button>
      <Button>Home Page</Button>
    </ButtonGroup>
  </Container>
)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #19191B;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  margin-top: 60px;
  justify-content: space-evenly;
`

const Button = styled.a`
  background: #1D2229;
  padding: 8px 25px;
  border-radius: 4px;
  color: #FFF;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 4px;
  font-weight: bold;
  margin-right: 10px;
  background: #E01E5A;

  text-decoration: none;
  transition: all 0.3s linear;
  :hover {
    background: transparent;
    outline: 1px solid #E01E5A;
  }
  :last-child{ 
    background: #2EB67D;   
    :hover { 
      background: transparent;
      outline: 1px solid #2EB67D;
    }
  }
`
