import styled from 'styled-components'

export default({...props}) => (
   <UserAvatar {...props}/>
)

const UserAvatar = styled.img`
  cursor: pointer;
  border-radius: 3px;
  ${({size}) => `
    width: ${size}px;
    height: ${size}px;
  `}
`
