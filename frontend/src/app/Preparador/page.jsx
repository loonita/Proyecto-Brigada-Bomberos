"use client"
import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Preparador = () => (
  <div>   
    <Box bg='tomato' w='100%' p={4} color='white'>
      <h1>Preparador Fisico</h1>
      </Box>
    <Box bg="gray.800" color="white" p={4} minHeight="100vh">
    <VStack spacing={4} align="stretch">
      <Link href="/Preparador/PrincipalPreparador" passHref>
        <Button as="a" colorScheme="blue" variant="outline">
          Crear Acondicionamiento de Brigadista
        </Button>
      </Link>
      <Link href="/Preparador/VerAcond" passHref>
        <Button as="a" colorScheme="green" variant="outline">
          Ver Acondicionamiento de Brigadista
        </Button>
      </Link>
    </VStack>
  </Box>
  </div>
  
);

export default Preparador;


