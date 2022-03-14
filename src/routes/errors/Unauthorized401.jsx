import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {SiSlack} from 'react-icons/si'

export default() => { 
  const navigate = useNavigate()

  return (
    <Container>
      <SiSlack size={100} color={'whitesmoke'}/>
      <img src='./404.png' style={{height: '150px'}}/>
      <h4>Opps! The page you were looking for was not found</h4>
      <ButtonGroup>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        <Button onClick={() => navigate('')}>Home Page</Button>
      </ButtonGroup>
    </Container>
  )
}


// Styled Components 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #19191b;
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
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 25px;
  font-weight: bold;
  margin-right: 10px;
  border-radius: 4px;
  background: #e01e5a;

  text-decoration: none;
  transition: all 0.3s linear;
  :hover {
    background: none;
    outline: 1px solid #e01e5a;
  }
  :last-child{ 
    background: #2eb67d;   
    :hover { 
      background: none;
      outline: 1px solid #2eb67d;
    }
  }
`
