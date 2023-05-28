import React, { useState } from "react";
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
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Redux/phonebook.slice";
const init={
  name:"",
  avatar:"",
  phone:"",
  address:"",
  label:"",
  isBookmarked:false
}
const AddContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contact,setContact]=useState(init);
  const {contacts}=useSelector(store=>store.contact);
  const dispatch=useDispatch();
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setContact({
      ...contact,[name]:value
    })
  }
  const addHandler=()=>{
    let isPresent=false;
    contacts.forEach((el)=>{
      if(el.name==contact.name){
        isPresent=true;
      }
    })
    if(!isPresent){
      dispatch(addContact(contact));
    }
    else{
      alert("Contact already exist")
    }
    onClose();
  }
  return (
    <Box>
      <Button variant="outline" onClick={onOpen}>
        <FaPlus />
        <Text ml="5px">Contact</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Box>
                <Text>Name</Text>
                <Input type="text" onChange={changeHandler} name='name' />
              </Box>
              <Box>
                <Text>Avatar</Text>
                <Input type="url" onChange={changeHandler} name='avatar' />
              </Box>
              <Box>
                <Text>Phone</Text>
                <Input type="tel" onChange={changeHandler} name='phone' />
              </Box>
              <Box>
                <Text>Address</Text>
                <Input type="text" onChange={changeHandler} name='address' />
              </Box>
              <Select onChange={changeHandler} name='label'>
                <option value="">Label</option>
                <option value="work">Work</option>
                <option value="school">School</option>
                <option value="friend">Friend</option>
                <option value="family">Family</option>
              </Select>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" colorScheme="green" onClick={addHandler}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddContact;
