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
          colorScheme="teal"
          size="sm"
          borderRadius="md"
          px={2}
          py={4}
          fontSize="sm"
          fontWeight="medium"
          _hover={{ bg: "teal.600" }}
          _focus={{ boxShadow: "outline" }}
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
          _hover={{ bg: "teal.600" }}
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
    <Box>
      <AgendarList />
      <CreateButton />
    </Box>
  );
};

export default Agendar;
