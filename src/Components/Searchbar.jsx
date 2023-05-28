import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { searchContact } from '../Redux/phonebook.slice'
const Searchbar = () => {
  const [text,setText]=useState("")
  const dispatch=useDispatch();
  const searchHandler=()=>{
     dispatch(searchContact(text))
  }
  return (
    <Box>
    <InputGroup>
    <Input type='text' placeholder='Search' onChange={(e)=>setText(e.target.value)} />
    <InputRightElement>
      <Box onClick={searchHandler} cursor='pointer'>
    <FaSearch />
      </Box>
    </InputRightElement>
    </InputGroup>
    </Box>
  )
}

export default Searchbar