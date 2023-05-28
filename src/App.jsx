import React from "react";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import ContactTable from "./Components/ContactTable";

const App = () => {
  return (
    <Box>
      <Navbar />
      <ContactTable />
    </Box>
  );
};

export default App;
