"use client";
import React from "react";
import { Box, Link, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import AgendarList from "./agendarList";

const CreateButton = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" mt="-20%">
      <Link href="/Agendar/new/">
        <Button
          colorScheme="yellow" // Use the yellow color for the create button
          size="sm"
          borderRadius="md"
          px={2}
          py={4}
          fontSize="sm"
          fontWeight="medium"
          _hover={{ bg: "#FFA570" }} // Change the hover color to the lighter shade of yellow
          _focus={{ boxShadow: "outline" }}
          mr={4} // Add some spacing between the buttons
        >
          Crear cita
        </Button>
      </Link>
      <Link href="/Home">
        <Button
          colorScheme="red"
          size="sm"
          borderRadius="md"
          px={2}
          py={4}
          fontSize="sm"
          fontWeight="medium"
          _hover={{ bg: "#FFA570" }} // Change the hover color to the lighter shade of yellow
          _focus={{ boxShadow: "outline" }}
        >
          Atras
        </Button>
      </Link>
    </Flex>
  );
};

const Agendar = () => {
  return (
    <Box bg="#313236" color="#F3F3FB" minHeight="100vh"> {/* Apply the secondary background color and text color */}
      <AgendarList />
      <CreateButton />
    </Box>
  );
};

export default Agendar;
