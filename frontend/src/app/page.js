"use client";
import React from "react";
import Logout from "@/components/Logout";
import PrivateRoute from "@/components/PrivateRoute";
import useAuth from "@/hooks/useAuth";
import { Box, VStack, Heading, Text, ChakraProvider, CSSReset } from "@chakra-ui/react";
import Card from "@/components/card";
import Menu from "@/components/menu";

function StyledButton(props) {
  return (
    <Box
      as="button"
      bg="gray.700"
      color="white"
      p={2}
      borderRadius="md"
      fontWeight="bold"
      _hover={{ bg: "gray.600" }}
      {...props}
    />
  );
}

function Home() {
  const { user } = useAuth();

  return (
    <ChakraProvider>
      <CSSReset />
      {/* Layout */}
      <Box
        minH="100vh"
        bg="gray.800" // Color de fondo oscuro
        color="white" // Color del texto en blanco para legibilidad
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} align="center">
          {/* Header */}
          <Heading as="h1" fontSize="36px" fontWeight="bold">
            Brigada de Bomberos
          </Heading>
          {/* Menu */}
          <Menu />
          <Box>
            <Card bg="gray.700" p={4} w="100%">
              <Text fontSize="18px" textAlign="center">
                Iniciaste sesión como {user?.email}
              </Text>
            </Card>
          </Box>

          {/* Logout Button */}
          <StyledButton>
            <Logout />
          </StyledButton>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Home;