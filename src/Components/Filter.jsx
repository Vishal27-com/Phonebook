import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import React from 'react'
import {FaFilter} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { filterContact } from '../Redux/phonebook.slice'
const Filter = () => {
  const dispatch=useDispatch();
  const filterHandler=(e)=>{
   dispatch(filterContact(e.target.value))
  }
  return (    
    <Menu>
  <MenuButton as={Button} variant='outline'>
  <FaFilter />
  </MenuButton>
  <MenuList onClick={filterHandler} >
    <MenuItem value='all'>All</MenuItem>
    <MenuItem value='work'>Work</MenuItem>
    <MenuItem value='school'>School</MenuItem>
    <MenuItem value='friends'>Friends</MenuItem>
    <MenuItem value='family'>Family</MenuItem>
  </MenuList>
</Menu>

  )
}

export default Filter