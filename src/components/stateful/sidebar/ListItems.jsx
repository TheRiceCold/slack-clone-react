import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
<<<<<<< HEAD
import styled from 'styled-components'
import {CgLock} from 'react-icons/cg'
import {HiPlus} from 'react-icons/hi'
import Modal from '../../Modal'
import {useState} from 'react'

export default({label, list}) => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
=======
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'
import {useState} from 'react'

export default(props) => {
  const {
    addGeneral,
    label, list,
    setShowModal,
    itemKey, itemImg
  } = props

  const [isRotate, setIsRotate] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948

  return (
    <div style={{marginTop: '10px'}}>
      <Tab 
<<<<<<< HEAD
        active={active} 
        visible={visible}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
=======
        isRotate={isRotate} 
        showOptions={showOptions}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
      >
        <div style={{display: 'flex'}}>
          <RiArrowRightSFill 
            size={20} 
<<<<<<< HEAD
            onClick={() => setActive(!active)} 
          />
          <p>{label}</p>
        </div>
        <div>
          <FiMoreVertical size={18}/>
          <HiPlus size={20} onClick={() => setShow(true)}/>
        </div>
        <Modal onClose={() => setShow(false)} show={show}/>
      </Tab>
      <List active={active}>
        <ListItem style={{background: '#537aa6', color: '#fff'}}>
          <CgLock/>
          <p>general</p>
        </ListItem> 
        {list.map(({name}, index) => (
          <ListItem key={index}>
            <CgLock/>
            <p>{name}</p>
=======
            onClick={() => setIsRotate(!isRotate)} 
          />
          <p style={{marginLeft:'8px'}}>{label}</p>
        </div>
        <div>
          <button>
            <FiMoreVertical size={18} color={'#b0b2b4'}/>
          </button>
          <button onClick={() => setShowModal(true)}>
            <HiPlus size={20} color={'#b0b2b4'}/>
          </button>
        </div>
      </Tab>
      <List isRotate={isRotate}>
        {addGeneral && 
          <ListItem to=''>
            # general
          </ListItem>
        }
        {list && list.map((item, index) => (
          <ListItem to='' key={index}>
            {itemImg}
            <p>{item[itemKey]}</p>
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
          </ListItem> 
        ))}
      </List>
    </div>
  )
}

const List = styled.div`
<<<<<<< HEAD
  display: ${({ active }) => !active && 'none'}
`

const ListItem = styled.div`
  height: 28px;
  display: flex;
=======
  display: ${
    ({ isRotate }) => !isRotate && 'none'
  }
`

const ListItem = styled(NavLink)`
  height: 28px;
  display: flex;
  color: #b0b2b4;
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
  font-size: 15px;
  cursor: pointer;
  padding-left: 36px;
  align-items: center;
<<<<<<< HEAD
  p { margin-left: 8px; } 
  &:hover { background: #313843; }
=======
  text-decoration: none;
  :hover { background: #313843; }
  ${({ active }) => active && `
    color: #FFF;
    background: #537AA6;`
  }
  img { height: 20px; }
  p { margin-left: 8px; } 
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
`

const Tab = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  font-size: 15px;
  padding-left: 19px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;
<<<<<<< HEAD
  svg:hover {
    border-radius: 5px;
    background: #34393F;
  }
  div:first-child svg {
    transition: all .3s ease;
    transform: rotate(${
      ({ active }) => active ? '90deg' : '0deg'
    });
  }
  div:last-child {
    transition: all .2s ease;
    opacity: ${({ visible }) => visible ? '1' : '0'}
=======
  button { 
    cursor: pointer;
    background: none; 
  }
  div:first-child svg {
    transition: transform .1s ease;
    transform: rotate(${
      ({ isRotate }) => isRotate ? '90deg' : '0deg'
    });
  }
  div:last-child {
    transition: opacity .1s ease-out;
    opacity: ${({ showOptions }) => showOptions ? '1' : '0'}
>>>>>>> e843a8aa474356f908ee3ad6e60d2e5a40186948
  }
`
