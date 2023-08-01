'use client';
import React from 'react';
import { Form } from './Form';
import { Box, Heading } from '@chakra-ui/react';

const Signin = () => {
  return (
    <Box
      bg="#313236" // Dark Gray (#313236)
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="#313236" // Dark Gray (#313236)
        w="100%"
        p="4"
        borderRadius="md"
        boxShadow="lg"
        maxW="400px"
        textAlign="center"
        color="black" // White (#F3F3FB)
      >
        <Heading as="h2" size="lg" color="#FEE3A2" mb="4"> {/* Yellow (#FEE3A2) */}
          Inicio de sesión
        </Heading>
        <Form/>
        {/* Colocamos el botón al centro debajo del formulario */}
        <Box mt="4" color="#F3F3FB"> {/* White (#F3F3FB) */}
          <button type="submit" bg="#FFA570" color="white" fontWeight="bold" py="2" px="4" borderRadius="md" _hover={{ bg: '#778D45' }}> {/* Orange (#FFA570), Hover Green (#778D45) */}
            Iniciar sesión
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
