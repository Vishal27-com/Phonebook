import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import {MdEdit} from "react-icons/md"

import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../Redux/phonebook.slice";
const init={
  name:"",
  avatar:"",
  phone:"",
  address:"",
  label:"",
  isBookmarked:false
}
const EditContact = ({id,data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [contact,setContact]=useState(init);
    const dispatch=useDispatch();
    const changeHandler=(e)=>{
      const {name,value}=e.target;
      setContact({
        ...contact,[name]:value
      })
    }
    const addHandler=()=>{
        dispatch(editContact({id,contact}));
        onClose();
    }
    useEffect(()=>{
     setContact(data);
    },[])
  return (
    <Box>
    <Box onClick={onOpen} cursor='pointer'>
    <MdEdit size={20} />
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Box>
              <Text>Name</Text>
              <Input type="text" onChange={changeHandler} name='name'  value={contact.name}/>
            </Box>
            <Box>
              <Text>Avatar</Text>
              <Input type="url" onChange={changeHandler} name='avatar'  value={contact.avatar}/>
            </Box>
            <Box>
              <Text>Phone</Text>
              <Input type="tel" onChange={changeHandler} name='phone'  value={contact.phone}/>
            </Box>
            <Box>
              <Text>Address</Text>
              <Input type="text" onChange={changeHandler} name='address'  value={contact.address}/>
            </Box>
            <Select onChange={changeHandler} name='label' value={contact.label}>
              <option value="">Label</option>
              <option value="work">Work</option>
              <option value="school">School</option>
              <option value="friend">Friend</option>
              <option value="family">Family</option>
            </Select>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button variant="solid" colorScheme="yellow" onClick={addHandler}>
            Edit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>

  )
}

export default EditContact