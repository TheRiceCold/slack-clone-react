import styled from 'styled-components'

export default() => (
  <Container>
    <Header>
      <p>Mentions & reactions</p>
    </Header>
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
`

const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1a1d21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373b;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  p { font-weight: 700; }
`
