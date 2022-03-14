import styled from 'styled-components'

export default {
  primary: styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    color: whitesmoke;
    font-weight: bold;
    border-radius: 3px;
    background: #2eb67d; 
    transition: all ease .2s;
    :hover { 
      background: none;
      outline: 1px solid #2eb67d;
    }
  `,
  secondary: styled.button` `,
}
