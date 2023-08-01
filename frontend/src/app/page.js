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
      bg="#313236" // Dark Gray (#313236)
      color="#F3F3FB" // White (#F3F3FB)
      p={2}
      borderRadius="md"
      fontWeight="bold"
      _hover={{ bg: "#212226" }} // Primary Black (#212226)
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
        bg="#313236" // Dark Gray (#313236)
        color="#F3F3FB" // White (#F3F3FB)
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} align="center">
          {/* Header */}
          <Heading as="h1" fontSize="36px" fontWeight="bold" color="#FFA570"> {/* Orange (#FFA570) */}
            Brigada de Bomberos
          </Heading>
          {/* Menu */}
          <Menu />
          <Box >
            <Card bg="#313236" // Dark Gray (#313236)
              p={4} w="100%"
            >
              <Text fontSize="18px" textAlign="center" color={'white'}>
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
