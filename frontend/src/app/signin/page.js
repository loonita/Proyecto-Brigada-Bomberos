'use client';
import React from 'react';
import { Form } from './Form';
import { Box, Heading } from '@chakra-ui/react';

const Signin = () => {
  return (
    <Box
      bg="gray.900"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="gray.800"
        w="100%"
        p="4"
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        textAlign="center"
        color={'black'}
      >
        <Heading as="h2" size="lg" color="white" mb="4">
          Inicio de sesión
        </Heading>
        <Form />
        {/* Colocamos el botón al centro debajo del formulario */}
        <Box mt="4" color={'white'}>
          <button type="submit">Iniciar sesión</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
