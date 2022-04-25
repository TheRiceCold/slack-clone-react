import {FC, Dispatch, useState, ChangeEvent} from "react"

import {uniqueArray, findObjByKey} from "@/utils/helpers"
import {useUsers} from "@/contexts/UsersProvider"
import {UserType} from "@/types/clientTypes"

interface IProps {
  setSelected: Dispatch<Number>
}

const SearchMember: FC<IProps> = ({setSelected}) => {
  // const {users} = useUsers()
  const [input, setInput]= useState<string>("")
  const [suggestions, setSuggestions] = useState<Array<UserType>>([])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setInput(e.target.value)
    // let matches = input.length > 0
    //   ? findObjByKey(users, 'email', input)
    //     : []
    // setSuggestions(matches)
  }

  return (
    <>
      <input onChange={handleOnChange} placeholder='somebody@example.com'/>
      <div>
        {/* {suggestions.map((user: UserType, idx: any) => ( */}
        {/*   <div key={idx} onClick={ () => setSelected((current: Number[]) => uniqueArray([...current, user.id])) }> */}
        {/*     <img src=""/> */}
        {/*     <span>{user.email}</span> */}
        {/*   </div> */}
        {/* ))} */}
      </div>
    </>
  )  
}

export default SearchMember
