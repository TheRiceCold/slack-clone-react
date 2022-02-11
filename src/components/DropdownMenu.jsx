import styled from "styled-components"
  
export function DropdownMenu() {
  return (
    <Dropdown>
      <Header>
        <Image><img src='./frog-boi.jpg'/></Image>
        <Details>
          <User>Hisoka</User>
          <Status>🟢 Active</Status>
        </Details>
      </Header>
      <Input>
        <Update placeholder="☺ Update your status"/>
      </Input>
      <Content>
        <MenuItem>Set yourself as away</MenuItem>
        <MenuItem>Pause notifications</MenuItem>
      </Content>
      <Content>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </Content>
      <Content>
        <MenuItem>Downloads</MenuItem>
      </Content>
      <Footer>
        <MenuItem >Sign out of Avion School</MenuItem>
      </Footer>  
    </Dropdown>
  )
}

const Dropdown = styled.div`
  position: absolute;
  top: 34px;
  right: 16px;
  width: 300px;
  background: #2b2f33;
  border: 1px solid #8d8d8e;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  cursor: default;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 16px;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Input = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

const Content = styled.div`
  border-bottom: 1px solid #8d8d8e;
  padding-top: 8px;
  padding-bottom: 8px;
`

const Footer = styled.div`
  padding-top: 8px;
`
const Image = styled.div`
  width: 38px;
  height: 38px;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const User = styled.div`
  color: lightgray;
  font-weight: bold;
`

const Status = styled.div`
  color: #b8b9ba;
  font-size: 12px;
`

const Update = styled.input`
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  color: #d1d2d3;
  background-color: #1b1d21;
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  ::placeholder{
    color: #d1d2d3;
  }
  &:hover {
    filter: brightness(1.2);
  }
`

const MenuItem = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: transparent;
  width: 100%;
  color: #d1d2d3;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #525357;
  }
`