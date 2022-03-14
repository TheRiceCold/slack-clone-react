import styled from 'styled-components'

export default styled.img`
  cursor: pointer;
  border-radius: 3px;
  ${({size}) => `
    width: ${size || '15'}px;
    height: ${size || '15'}px;`
  }
`
