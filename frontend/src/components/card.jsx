import React from "react";
import { Box, Card as ChakraCard } from "@chakra-ui/react";

export default function Card(props) {
  return (
    <ChakraCard bg="white" borderRadius="lg" boxShadow="md" p={4} {...props} />
  );
}
