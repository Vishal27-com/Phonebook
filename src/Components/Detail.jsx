import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Stack,
  Avatar,
  Center,
} from "@chakra-ui/react";

const Detail = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
  return (
    <Box>
    <Box onClick={onOpen} cursor='pointer'>
    Detail
    </Box>
    <Modal isOpen={isOpen} onClose={onClose} size='sm'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
            <Center>
            <Avatar size='xl' src={data.avatar} name={data.name} />
            </Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <Stack fontSize='18px' fontWeight='600'>
              <Text>Name: {data.name}</Text>
              <Text>Phone: {data.phone}</Text>
              <Text>Address: {data.address}</Text>
              <Text>Label: {data.label}</Text>
          </Stack>
    
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>

  )
}

export default Detail