import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Avatar,
    Flex,
    Box,
  } from '@chakra-ui/react'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux';
import {MdBookmark, MdBookmarkBorder, MdDelete, MdEdit} from "react-icons/md"
import { bookmarkContact, deleteContact } from '../Redux/phonebook.slice';
import EditContact from './EditContact';
import Detail from './Detail';
const ContactTable = () => {
  const {contacts,filter,search}=useSelector(store=>store.contact);
  const [bookmarked,setBookmarked]=useState([])
  const [data,setData]=useState([])
  const [page,setPage]=useState(1);
  const dispatch=useDispatch()
 const bookmarkHandler=(name,phone)=>{
    dispatch(bookmarkContact({name,phone}))
 }
 const deleteHandler=(name,phone)=>{
    dispatch(deleteContact({name,phone}))
 }
 useEffect(()=>{
let start=((page-1)*10);
let end=(page*10);
let currentData=contacts.slice(start,end);
  if(filter==="all"){
    if(search!==""){
      setBookmarked(currentData.filter((item)=>(item.isBookmarked===true && item.name==search)))
    setData(currentData.filter((item)=>(item.isBookmarked===false && item.name==search)))
    }
    else{
      setBookmarked(currentData.filter((item)=>item.isBookmarked===true))
      setData(currentData.filter((item)=>item.isBookmarked===false))
    }
  }
  else{
    if(search!==""){
      setBookmarked(currentData.filter((item)=>(item.isBookmarked===true && item.label===filter && item.name==search)))
    setData(currentData.filter((item)=>(item.isBookmarked===false && item.label===filter && item.name==search)))
    }
    else{
      setBookmarked(currentData.filter((item)=>(item.isBookmarked===true && item.label===filter)))
     setData(currentData.filter((item)=>(item.isBookmarked===false && item.label===filter)))
    }
  }
 },[contacts,filter,search,page])

const pageHandler=(p)=>{
 setPage(p);

}

  return (
     <TableContainer>
  <Table variant='simple' mt='20px' size='sm' fontWeight='600'>
  <TableCaption>
    <Pagination total={contacts.length} page={page} pageHandler={pageHandler} />
  </TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Phone Number</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Contact({contacts.length})</Td>
      </Tr>
      {
        bookmarked?.map((item,ind)=>
        <Tr key={item.name}>
        <Td>
          <Flex h='100%' gap='20px' align='center'>
          <Avatar size='sm' src={item.avatar} name={item.name} />
          {item.name}
          </Flex>
          </Td>
        <Td>{item.phone}</Td>
        <Td>
          <Flex gap='20px'>
          <Box onClick={()=>bookmarkHandler(item.name,item.phone)} cursor='pointer'>
           <MdBookmark size={20} />
          </Box>
          <EditContact id={ind} data={item} />
          <Box onClick={()=>deleteHandler(item.name,item.phone)} cursor='pointer'>
          <MdDelete size={20} />
          </Box>
          <Detail data={item} />
          </Flex>
          </Td>
      </Tr>
        )
      } 
      </Tbody>
      <Tbody>

      {
        data?.map((item,ind)=>
        <Tr key={item.name}>
      <Td>
        <Flex h='100%' gap='20px' align='center'>
        <Avatar size='sm' src={item.avatar} name={item.name} />
        {item.name}
        </Flex>
        </Td>
      <Td>{item.phone}</Td>
      <Td>
        <Flex gap='20px'>
        <Box onClick={()=>bookmarkHandler(item.name,item.phone)} cursor='pointer'>
        <MdBookmarkBorder size={20} />
        </Box>
        <EditContact id={ind} data={item} />
        <Box onClick={()=>deleteHandler(item.name,item.phone)} cursor='pointer'>
        <MdDelete size={20} />
        </Box>
        <Detail data={item} />
        </Flex>
        </Td>
    </Tr>
      )
    }
    
    </Tbody>
  </Table>
</TableContainer>   
  )
}

export default ContactTable