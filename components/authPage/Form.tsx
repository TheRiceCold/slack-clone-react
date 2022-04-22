import {FormType, InputType} from "./types"

export default(props: FormType): NextFunctionComponent => {
  const {btnLabel, inputList, onSubmit} = props

  return (
    <form onSubmit={onSubmit}>
      {inputList.map(
        ({id, type, placeholder}: InputType, idx) => (
          <input key={idx} 
            type={type} id={id} 
            placeholder={placeholder}/>
        )
      )}
      <input type="submit" value={btnLabel}/>
    </form>
  )
}
