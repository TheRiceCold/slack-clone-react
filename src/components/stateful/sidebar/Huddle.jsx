import {MdPodcasts} from 'react-icons/md'
import styled from 'styled-components'

<<<<<<< HEAD
export default({active}) => {
  return (
    <Huddle>
      <MdPodcasts size={20}/>
      <p>batch15</p>
    </Huddle>
  )
}
=======
export default({active}) => ( 
  <Huddle>
    <MdPodcasts size={20}/>
    <p>batch15</p>
  </Huddle>
)
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948

const Huddle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
<<<<<<< HEAD
=======
  margin-top: auto;
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
  position: relative;
  padding-left: 25px;
  align-items: center;
  outline: 1px solid #34383E;
  p { margin-left: 10px; }
  : hover { color: #fff; }
`
