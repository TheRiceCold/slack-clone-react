import styled from 'styled-components'

export default({inputData, handleSubmit, btnLabel}) => (
  <Form onSubmit={handleSubmit}>
    {inputData.map((input, index) => (
      <input 
        key={index}
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
      />
    ))}
    <button>{btnLabel}</button> 
  </Form>
)

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    padding: 10px;
    margin-top: 10px;
    color: whitesmoke;
    border-radius: 3px;
    border: 1px solid grey;
    background: transparent;
    &::placeholder { color: whitesmoke; }
    &:hover { 
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) 
    }
  }
  
  button {
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
    &:hover { 
      background: transparent;
      outline: 1px solid #2EB67D;
    }
  }
`
