import styled,{keyframes} from 'styled-components'
import {useState} from 'react'

export default({show, type, message}) => (
  <Toast show={show} fail={type === 'fail'}>
    {message}
  </Toast>
)

const Toast = styled.div`
  left: 50%;
  bottom: 3%;
  width: 350px;
  height: 50px;
  display: flex;
  position: fixed;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  visibility: ${
    ({ show }) => show ? 'visible' : 'hidden'
  };
  background: ${
    ({ fail }) => fail ? '#E01E5A' : '#2EB67D'
  };
`

const fadeIn = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    opacity: 1;
    bottom: 30px;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    bottom: 30px;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
`
