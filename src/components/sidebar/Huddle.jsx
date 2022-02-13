import {MdPodcasts} from 'react-icons/md'
import styled from 'styled-components'

export default() => (
  <Huddle>
    <MdPodcasts size={20}/>
    <p>batch15</p>
  </Huddle>
)

const Huddle = styled.div`
  bottom: 0;
  width: 238px;
  height: 50px;
  display: flex;
  position: fixed;
  padding-left: 25px;
  background: #1d2229;
  align-items: center;
  outline: 1px solid #34383E;
  p { margin-left: 10px; }
  : hover { color: #fff; }
`

