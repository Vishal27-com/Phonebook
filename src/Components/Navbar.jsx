import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import AddContact from "./AddContact";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <Flex w="100vw" h="60px" p="10px" justify="space-between" align="center">
      <Flex gap="10px" h="100%" align="center">
        <FaUserCircle size={30} />
        <Text fontSize="18px" fontWeight="600" color="blue.800">
          Phonebook
        </Text>
      </Flex>
      <Searchbar />
      <Flex gap="10px" h="100%" align="center">
        <Filter />
        <AddContact />
      </Flex>
    </Flex>
  );
};

export default Navbar;
